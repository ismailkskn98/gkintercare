"use client";

import { useEffect, useMemo, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { useDropzone } from "react-dropzone";

const imageAccept = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
};

export default function ConsultationImageDropzone({ error, files = [], labels, onChange }) {
  const [dropError, setDropError] = useState("");
  const remainingSlots = Math.max(3 - files.length, 0);
  const previews = useMemo(() => files.map((file) => ({ file, url: URL.createObjectURL(file) })), [files]);

  useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, [previews]);

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    accept: imageAccept,
    disabled: remainingSlots === 0,
    maxFiles: remainingSlots || 1,
    maxSize: 5 * 1024 * 1024,
    multiple: true,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length) {
        setDropError(labels.rejected);
      } else {
        setDropError("");
      }

      const nextFiles = [...files, ...acceptedFiles].slice(0, 3);
      onChange(nextFiles);
    },
  });

  function removeFile(fileToRemove) {
    onChange(files.filter((file) => file !== fileToRemove));
  }

  return (
    <div className="grid gap-2.5">
      <div
        {...getRootProps({
          className: `group flex min-h-24 flex-col items-center justify-center rounded-xl border border-dashed px-3 py-4 text-center transition ${
            error || dropError ? "border-[#b53a3a] bg-[#fff7f7]/50" : isDragActive ? "border-accent bg-accent/6" : "border-primary/14 bg-transparent hover:border-accent/70"
          } ${remainingSlots === 0 ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`,
        })}
      >
        <input {...getInputProps()} />
        <span className="flex size-8 items-center justify-center rounded-full bg-light-bg text-accent ring-1 ring-primary/8">
          <ImagePlus className="size-4" />
        </span>
        <strong className="mt-2 text-xs font-800 text-primary">{isDragActive ? labels.dropActive : labels.title}</strong>
        <span className="mt-0.5 text-[11px] leading-4 text-muted">{labels.helper}</span>
      </div>

      {previews.length ? (
        <div className="grid grid-cols-3 gap-2">
          {previews.map(({ file, url }) => (
            <div className="relative overflow-hidden rounded-lg border border-primary/10 bg-light-bg" key={`${file.name}-${file.lastModified}`}>
              <img alt="" className="aspect-square w-full object-cover" src={url} />
              <button
                aria-label={labels.remove}
                className="focus-ring absolute right-1.5 top-1.5 flex size-7 items-center justify-center rounded-full bg-[#b53a3a] text-white shadow-sm transition hover:bg-[#922c2c]"
                onClick={() => removeFile(file)}
                type="button"
              >
                <X className="size-4" />
              </button>
            </div>
          ))}
        </div>
      ) : null}

      {error || dropError ? <p className="text-xs font-700 text-[#b53a3a]">{error || dropError}</p> : null}
    </div>
  );
}
