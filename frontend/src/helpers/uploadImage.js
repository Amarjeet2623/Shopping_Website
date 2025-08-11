const uploadImage = async (imageFile) => {
    const cloudName = "ds6a3nhlv"; // hardcoded for now to eliminate .env issues
    const uploadPreset = "mern_product"; // make sure this exists and is UNSIGNED!
  
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", uploadPreset);
  
    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        console.error("❌ Upload failed:", data);
        throw new Error(data?.error?.message || "Upload failed");
      }
  
      console.log("✅ Image uploaded:", data);
      return data;
    } catch (error) {
      console.error("🚨 Upload error:", error.message);
      return { error: error.message };
    }
  };
  
  export default uploadImage;
  