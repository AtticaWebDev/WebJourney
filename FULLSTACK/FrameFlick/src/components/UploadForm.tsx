function UploadForm() {
  return (
    <div className="text-center mt-10">
      <form className="flex items-center flex-col gap-8">
        <input type="file" className="file-input w-full max-w-xs" />
        <button className="btn gap-3">
          Téléverser <span>📥</span>
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
