const presets = [
    {
      slug: 'soft-shadow',
      name: 'Soft Shadow',
      values: { horizontalOffset: 5, verticalOffset: 5, blur: 10, spread: 0, color: 'rgba(0, 0, 0, 0.1)' },
    },
    // Add more presets here
  ];
  
  export function getAllPresets() {
    return presets;
  }
  
  export function getPresetBySlug(slug) {
    return presets.find((preset) => preset.slug === slug);
  }