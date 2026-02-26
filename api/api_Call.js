
const processPdfTool = async (files, toolSlug, password = "") => {
  const formData = new FormData();
  
  // 1. Files ko FormData mein add karna
  // Agar ek file hai toh bhi list ki tarah bhejenge
  Array.from(files).forEach((file) => {
    formData.append('files', file);
  });

  // 2. Extra data add karna
  formData.append('tool_type', toolSlug);
  if (password) {
    formData.append('password', password);
  }

  try {
    console.log(`Starting ${toolSlug} processing...`);
    
    const response = await fetch('http://127.0.0.1:8000/api/process/', {
      method: 'POST',
      body: formData,
      // Note: Content-Type header yahan nahi dena, 
      // browser khud 'multipart/form-data' set kar lega boundary ke saath
    });
    console.log(response,'lllllllllll')
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Server error occurred');
    }

    const data = await response.json();
    
    // 3. File download karwana (Automatic)
    if (data.download_url) {
      window.open(data.download_url, '_blank');
      return { success: true, url: data.download_url };
    }

  } catch (error) {
    console.error("API Error:", error.message);
    alert("Masla ho gaya yara: " + error.message);
    return { success: false, error: error.message };
  }
};