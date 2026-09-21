import React from 'react';

export default function ProjectFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div 
      className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.name;
        return (
          <button
            key={cat.name}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(cat.name)}
            className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-mono transition-all duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-luxe-gold ${
              isSelected
                ? 'bg-gradient-to-r from-luxe-gold to-luxe-bronze text-obsidian-950 font-bold shadow-lg shadow-black/40 scale-[1.02]'
                : 'bg-obsidian-900/90 border border-white/10 text-neutral-300 hover:text-white hover:border-luxe-gold/40'
            }`}
          >
            <span>{cat.name}</span>
            <span 
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-sans transition-colors ${
                isSelected 
                  ? 'bg-obsidian-950/20 text-obsidian-950 font-bold' 
                  : 'bg-white/10 text-neutral-400 group-hover:text-neutral-200'
              }`}
            >
              {cat.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
