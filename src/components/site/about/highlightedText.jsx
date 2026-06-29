"use client";

import { Fragment, useMemo } from "react";
import { Highlighter } from "@/components/ui/highlighter";

const DEFAULT_HIGHLIGHT_COLOR = "rgba(11, 60, 93, 0.09)";

function splitByPhrases(text, phrases) {
  if (!phrases?.length) {
    return [{ text, highlight: false }];
  }

  const sortedPhrases = [...phrases].sort((a, b) => b.length - a.length);
  let segments = [{ text, highlight: false }];

  for (const phrase of sortedPhrases) {
    const nextSegments = [];

    for (const segment of segments) {
      if (segment.highlight || !segment.text.includes(phrase)) {
        nextSegments.push(segment);
        continue;
      }

      const parts = segment.text.split(phrase);

      parts.forEach((part, index) => {
        if (part) {
          nextSegments.push({ text: part, highlight: false });
        }

        if (index < parts.length - 1) {
          nextSegments.push({ text: phrase, highlight: true });
        }
      });
    }

    segments = nextSegments;
  }

  return segments;
}

export default function HighlightedText({ text, phrases = [], highlightColor = DEFAULT_HIGHLIGHT_COLOR, className = "" }) {
  const segments = useMemo(() => splitByPhrases(text, phrases), [text, phrases]);

  return (
    <span className={className}>
      {segments.map((segment, index) => (
        <Fragment key={`${segment.text}-${index}`}>
          {segment.highlight ? (
            <Highlighter action="highlight" color={highlightColor} isView>
              <span className="text-primary">{segment.text}</span>
            </Highlighter>
          ) : (
            segment.text
          )}
        </Fragment>
      ))}
    </span>
  );
}
