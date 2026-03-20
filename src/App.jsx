import Intro from "./intro";
import Nav from "./nav";
import Tech from "./Tech";
import { skills, tools, projectLink, gitHubLink, imageLink, contactDetails} from "./skill";
import MyProject from "./Project";
import "./App.css";
import GetInTouch from "./getInTouch";
import Message from "./Message";

export default function App() {
  document.addEventListener("click", function (e) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    ripple.addEventListener("animationend", function () {
      ripple.remove();
    });
  });
  return (
    <div className="w-full">
      <div id="click-effect"></div>
      <div>
        <Nav />
      </div>
      <div>
        <Intro />
      </div>
      <div className="flex flex-col items-center justify-center mt-6">
        <h2 className="text-5xl font-serif">Skills</h2>
        <pre className="bg-blue-600 h-1"> </pre>
      </div>
      <div>
        <Tech skills={skills} heading="Tech Stack" />
      </div>
      <div>
        <Tech skills={tools} heading="Tools & Libraries" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <h2 className="text-3xl font-serif">My Projects</h2>
          <pre className="bg-blue-700 h-1 mb-6">                  </pre>
        </div>
        {/* 1 */}
        <MyProject
          imageLink={imageLink.greenEnv}
          projectLink={projectLink.greenEnv}
          gitHubLink={gitHubLink.greenEnv}
        />
        {/* 2 */}
        <MyProject
          imageLink={imageLink.wanderLust}
          projectLink={projectLink.wanderLust}
          gitHubLink={gitHubLink.wanderLust}
        />
        {/* 3 */}
        <MyProject
          imageLink={imageLink.resume}
          projectLink={projectLink.resume}
          gitHubLink={gitHubLink.resume}
        />
        {/* 4 */}
        <MyProject
          imageLink={imageLink.todo}
          projectLink={projectLink.todo}
          gitHubLink={gitHubLink.todo}
        />
        {/* 5 */}
        <MyProject
          imageLink={imageLink.password}
          projectLink={projectLink.password}
          gitHubLink={gitHubLink.password}
        />
        {/* 6 */}
        <MyProject
          imageLink={imageLink.tictactoe}
          projectLink={projectLink.tictactoe}
          gitHubLink={gitHubLink.tictactoe}
        />
        {/* 7 */}
        <MyProject
          imageLink={imageLink.advanceTodo}
          projectLink={projectLink.advanceTodo}
          gitHubLink={gitHubLink.advanceTodo}
        />
        {/* 8 */}
        <MyProject
          imageLink={imageLink.sportify}
          projectLink={projectLink.sportify}
          gitHubLink={gitHubLink.sportify}
        />
        {/* 9 */}
        <MyProject
          imageLink={imageLink.toggler}
          projectLink={projectLink.toggler}
          gitHubLink={gitHubLink.toggler}
        />
        {/* 10 */}
        <MyProject
          imageLink={imageLink.weatherApp}
          projectLink={projectLink.weatherApp}
          gitHubLink={gitHubLink.weatherApp}
        />
        {/* 11 */}
        <MyProject
          imageLink={imageLink.tweeter}
          projectLink={projectLink.tweeter}
          gitHubLink={gitHubLink.tweeter}
        />
        {/* 12 */}
        <MyProject
          imageLink={imageLink.processSteps}
          projectLink={projectLink.processSteps}
          gitHubLink={gitHubLink.processSteps}
        />
        {/* 13 */}
        <MyProject
          imageLink={imageLink.imageSlider}
          projectLink={projectLink.imageSlider}
          gitHubLink={gitHubLink.imageSlider}
        />
        {/* 14 */}
        <MyProject
          imageLink={imageLink.nertflix}
          projectLink={projectLink.nertflix}
          gitHubLink={gitHubLink.nertflix}
        />
      </div>

      <div className="flex justify-around flex-wrap">
        <GetInTouch email={contactDetails.email} mobile={contactDetails.phone} location={contactDetails.location} gitHub={contactDetails.gitHub} linkedIn={contactDetails.linkedIn}/>
        <Message />
      </div>
    </div>
  );
}
