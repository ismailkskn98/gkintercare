"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Cropper from "react-easy-crop";
import "react-easy-crop/react-easy-crop.css";
import { Crop, ImagePlus, X } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const imageAccept = {
  "image/avif": [".avif"],
  "image/jpeg": [".jpeg", ".jpg"],
  "image/png": [".png"],
  "image/webp": [".webp"],
};

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", reject);
    image.src = source;
  });
}

function fileNameForType(fileName, type) {
  const extension = type === "image/png" ? "png" : "jpg";
  return fileName.includes(".") ? fileName.replace(/\.[^.]+$/, `.${extension}`) : `${fileName}.${extension}`;
}

async function cropImageToFile(source, cropPixels, sourceFile) {
  const image = await loadImage(source);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const outputType = sourceFile.type === "image/png" ? "image/png" : "image/jpeg";

  canvas.width = cropPixels.width;
  canvas.height = cropPixels.height;

  context.drawImage(image, cropPixels.x, cropPixels.y, cropPixels.width, cropPixels.height, 0, 0, cropPixels.width, cropPixels.height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Görsel kırpılamadı."));
          return;
        }

        resolve(new File([blob], fileNameForType(sourceFile.name, outputType), { type: outputType, lastModified: Date.now() }));
      },
      outputType,
      0.92,
    );
  });
}

export default function ImageDropzone({ cropAspect, cropDescription, cropTitle, currentUrl = "", file, helperText, label, name, onChange, previewClassName }) {
  const [dropError, setDropError] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropPixels, setCropPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);
  const [pendingFile, setPendingFile] = useState(null);
  const [pendingUrl, setPendingUrl] = useState("");
  const [zoom, setZoom] = useState(1);
  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : currentUrl), [currentUrl, file]);

  useEffect(() => {
    if (!file || !previewUrl) return undefined;
    return () => URL.revokeObjectURL(previewUrl);
  }, [file, previewUrl]);

  useEffect(() => {
    if (!pendingUrl) return undefined;
    return () => URL.revokeObjectURL(pendingUrl);
  }, [pendingUrl]);

  const handleCropComplete = useCallback((_, croppedAreaPixels) => {
    setCropPixels(croppedAreaPixels);
  }, []);

  function openCropper(selectedFile) {
    setCrop({ x: 0, y: 0 });
    setCropPixels(null);
    setPendingFile(selectedFile);
    setPendingUrl(URL.createObjectURL(selectedFile));
    setZoom(1);
  }

  function closeCropper() {
    setPendingFile(null);
    setPendingUrl("");
    setCropPixels(null);
    setZoom(1);
  }

  async function saveCrop() {
    if (!pendingFile || !pendingUrl || !cropPixels) return;

    setIsCropping(true);
    try {
      const croppedFile = await cropImageToFile(pendingUrl, cropPixels, pendingFile);
      onChange?.(name, croppedFile);
      closeCropper();
    } catch (error) {
      setDropError(error.message || "Görsel kırpılamadı.");
    } finally {
      setIsCropping(false);
    }
  }

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    accept: imageAccept,
    maxFiles: 1,
    multiple: false,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length) {
        setDropError("Sadece avif, jpg, png veya webp görsel yükleyebilirsin.");
        return;
      }

      setDropError("");
      const selectedFile = acceptedFiles[0] || null;
      if (!selectedFile) return;

      if (cropAspect) {
        openCropper(selectedFile);
        return;
      }

      onChange?.(name, selectedFile);
    },
  });

  return (
    <div className="space-y-2">
      <div
        {...getRootProps({
          className: cn(
            "group flex cursor-pointer flex-col gap-3 rounded-lg border border-dashed border-primary/18 bg-light-bg p-3 transition-colors hover:border-accent hover:bg-white",
            isDragActive && "border-accent bg-white",
          ),
        })}
      >
        <input {...getInputProps({ name })} />
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-sm font-800 text-primary">
            <ImagePlus className="size-4 text-accent" />
            {label}
          </span>
          <span className="text-xs font-800 text-muted">{isDragActive ? "Bırak" : "Seç veya sürükle"}</span>
        </div>
        {helperText ? <p className="text-xs leading-5 text-muted">{helperText}</p> : null}

        {previewUrl ? (
          <img alt={label} className={cn("w-full rounded-md border border-primary/10 object-cover", previewClassName || "h-32")} src={previewUrl} />
        ) : (
          <div className={cn("flex w-full items-center justify-center rounded-md border border-primary/8 bg-white text-xs font-800 text-muted", previewClassName || "h-32")}>Görsel seçilmedi</div>
        )}
      </div>

      {file ? (
        <Button className="h-8 px-2 text-xs" onClick={() => onChange?.(name, null)} type="button" variant="ghost">
          <X className="size-3.5" />
          Seçimi kaldır
        </Button>
      ) : null}
      {dropError ? <p className="text-xs font-700 text-destructive">{dropError}</p> : null}

      <Dialog
        open={Boolean(pendingUrl)}
        onOpenChange={(open) => {
          if (!open) closeCropper();
        }}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-accent/12 text-accent">
              <Crop className="size-5" />
            </div>
            <DialogTitle>{cropTitle || `${label} kırp`}</DialogTitle>
            <DialogDescription>{cropDescription || "Görseli önerilen orana göre hizala; kaydedilen dosya bu kadrajla yüklenecek."}</DialogDescription>
          </DialogHeader>

          <div className="relative h-[26rem] overflow-hidden rounded-lg bg-primary">
            {pendingUrl ? <Cropper aspect={cropAspect || 1} crop={crop} image={pendingUrl} onCropChange={setCrop} onCropComplete={handleCropComplete} onZoomChange={setZoom} zoom={zoom} /> : null}
          </div>

          <label className="grid gap-2 text-xs font-800 uppercase text-muted">
            Yakınlaştır
            <input className="w-full accent-accent" max="3" min="1" onChange={(event) => setZoom(Number(event.target.value))} step="0.05" type="range" value={zoom} />
          </label>

          <DialogFooter>
            <Button disabled={isCropping} onClick={closeCropper} type="button" variant="outline">
              Vazgeç
            </Button>
            <Button disabled={isCropping || !cropPixels} onClick={saveCrop} type="button">
              {isCropping ? "Kırpılıyor..." : "Kırp ve kullan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
