import Typewriter from "typewriter-effect";

export default function LoadingScreen() {
  return (
    <div className="typewriter">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(15)
            .typeString(
              "seungyongmoon@seungyongs- LOADING..... <BR/>seungyongmoon@seungyongs- WELCOME TO WRAP AROUND THE WORLD<br/>STARTED SERVER ON URL: HTTPS://WRAPAROUNDTHEWORLD.ONLINE"
            )
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
}
