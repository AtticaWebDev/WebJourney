import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";
import ImageGallery from "../components/ImageGallery";

function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <UploadForm />
      <ImageGallery />
    </div>
  );
}

export default Timeline;
