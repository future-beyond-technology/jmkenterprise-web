"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type ProductMediaGalleryProps = {
  title: string;
  images: string[];
};

export function ProductMediaGallery({ title, images }: ProductMediaGalleryProps) {
  // Local state drives a lightweight gallery without introducing a heavy carousel dependency.
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="space-y-3">
      <motion.div
        key={activeImage}
        initial={{ opacity: 0.4, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.24 }}
        className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-700"
      >
        <Image
          src={activeImage}
          alt={`${title} visual`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 62vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`relative aspect-[4/3] overflow-hidden rounded-lg border transition ${
              activeImage === image
                ? "border-orange-400"
                : "border-zinc-700 hover:border-zinc-500"
            }`}
          >
            <Image src={image} alt={`${title} thumbnail`} fill className="object-cover" sizes="200px" />
          </button>
        ))}
      </div>
    </section>
  );
}
