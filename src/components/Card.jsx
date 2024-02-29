/* eslint-disable react/prop-types */
const Card = ({
  image_url,
  name,
  position,
  fifa_ratings: {
    overall,
    shooting,
    passing,
    dribbling,
    defending,
    physicality,
    pace,
  },
  handleNextClick,
  handlePrevClick,
}) => {
  // console.log(data)
  return (
    <div className="relative">
      <img
        src="https://res.cloudinary.com/dzgplbgdi/image/upload/v1709207262/React%20Props/background.png"
        alt="background"
        className="h-[530px]"
      />
      <div className="absolute flex gap-3 text-black left-[4rem] top-[80px]">
        <div>
          <h1 className="text-[40px]">{overall}</h1>
          <p className="text-[23px]">{position}</p>
        </div>
        <img src={image_url} className=" h-[200px] " alt="image url" />
      </div>
      <div className="absolute bottom-[15.795rem] left-[70px] text-black ">
        <p className="text-[1.65rem] font-bold">{name}</p>
      </div>
      <div className="flex gap-[70px] absolute bottom-[120px] left-[65px] text-black text-[1.2rem] ">
        <div className="flex flex-col gap-4">
          <p>
            <span className="font-semibold mr-3">{pace}</span> PAC
          </p>
          <p>
            <span className="font-semibold mr-3">{shooting}</span> SHO
          </p>
          <p>
            <span className="font-semibold mr-3">{passing}</span> PAS
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <span className="font-semibold mr-3">{dribbling}</span> DRI
          </p>
          <p>
            <span className="font-semibold mr-3">{defending}</span> DEF
          </p>
          <p>
            <span className="font-semibold mr-3">{physicality}</span> PHY
          </p>
        </div>
      </div>
      <div className="flex gap-6 ml-3 ">
        <button className="" onClick={handlePrevClick}>
          PREV PLAYER
        </button>
        <button className="" onClick={handleNextClick}>
          NEXT PLAYER
        </button>
      </div>
    </div>
  );
};

export default Card;
