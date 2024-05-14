import React, { useState } from "react";
import useStorage from "../hooks/useStorage";

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null); // Ajoutez le state pour l'URL
  const { startUpload, progress } = useStorage(setUrl); // Passez la fonction setUrl à useStorage

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      startUpload(selectedFile);
    }
    setSelectedFile(null);
  };

  return (
    <div className="text-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col gap-8"
      >
        <input
          onChange={handleFileChange}
          type="file"
          className="file-input w-full max-w-xs"
        />
        <button
          type="submit"
          className={`btn gap-3 ${Boolean(progress) && "loading"}`}
          disabled={!selectedFile}
        >
          Téléverser <span>📥</span>
        </button>
      </form>
      {url && <p>URL du fichier téléchargé : {url}</p>}{" "}
      {/* Afficher l'URL si elle est disponible */}
    </div>
  );
}

export default UploadForm;
