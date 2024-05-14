import useFirestore from "../hooks/useFirestore";
function ImageGallery() {
  const { docs: images, isLoading } = useFirestore("images");

  console.log("Images from Firestore:", images);

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
      {images.map((image) => (
        <div
          key={image.imageUrl}
          className="card card-compact w-full bg-base-100 shadow-xl "
        >
          <figure className="max-h-[15rem]">
            <img src={image.imageUrl} className="rounded-xl" />
          </figure>
          <div className="card-body">
            <p>Partager par : {image.userEmail} </p>
            <span>Mise en ligne : {image.createAt.toLocaleDateString()}</span>
            {/* Modifier ici */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
