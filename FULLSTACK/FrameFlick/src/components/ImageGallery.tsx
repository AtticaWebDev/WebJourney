function ImageGallery() {
  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 mt-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <p>Partager par : </p>
          <span>Mise en ligne : </span>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
