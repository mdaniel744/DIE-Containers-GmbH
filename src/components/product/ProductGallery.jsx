"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGallery({ images, title, imageAlts = [] }) {
  const allImages = images && images.length > 0 ? images : [];
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (allImages.length === 0) return null;

  const prev = () => setSelected((s) => s === 0 ? allImages.length - 1 : s - 1);
  const next = () => setSelected((s) => s === allImages.length - 1 ? 0 : s + 1);

  return (
    <>
      <div className="space-y-3">
        {/* Main image with slider controls */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border group">
          <AnimatePresence mode="wait">
            <motion.img
              key={selected} src={allImages[selected]}

              alt={imageAlts[selected] || title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }} />
            
          </AnimatePresence>

          {/* Zoom button */}
          <button
            onClick={() => setLightbox(true)}
            className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Prev / Next */}
          {allImages.length > 1 &&
          <>
              <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          }

          {/* Dot indicators */}
          {allImages.length > 1 &&
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {allImages.map((_, i) =>
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-2 h-2 rounded-full transition-all ${
              i === selected ? "bg-white scale-110" : "bg-white/50"}`
              } />

            )}
            </div>
          }
        </div>

        {/* Thumbnails */}
        {allImages.length > 1 &&
        <div className="flex gap-2 overflow-x-auto pb-1">
            {allImages.map((img, i) =>
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-20 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
            i === selected ?
            "border-[#F28C28] scale-[1.03]" :
            "border-border hover:border-[#F28C28]/50"}`
            }>
            
                <img src={img} alt={imageAlts[i] || `${title} ${i + 1}`} className="w-full h-full object-cover" />
              </button>
          )}
          </div>
        }
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}>
          
            <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={() => setLightbox(false)}>
            
              <X className="w-8 h-8" />
            </button>

            {allImages.length > 1 &&
          <>
                <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-white/10 rounded-full p-3 z-10"
              onClick={(e) => {e.stopPropagation();prev();}}>
              
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-white/10 rounded-full p-3 z-10"
              onClick={(e) => {e.stopPropagation();next();}}>
              
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
          }

            <motion.img
            key={selected}
            src={allImages[selected]}
            alt={imageAlts[selected] || title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} />
          

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selected + 1} / {allImages.length}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}