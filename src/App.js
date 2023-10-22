import "./App.css";
import Button from "./Button";
import ButtonOutler from "./ButtonOutler";
import DownloadIcon from "./DownloadIcon";
import DashboardButton from "./DashboardButton";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row justify-center m-2">
        {/* items-center justify-center h-screen */}
        {/* <Button color="Primary" shade="50" text="Button" /> */}
        {/* <Button color="Primary" shade="300" text="Button" /> */}
        {/* <Button color="Primary" shade="500" text="Button" /> */}
        {/* <button text="Button" className="bg-Natural-400 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2 text-3xl" >Text</button> */}
        <Button
          color="Primary"
          shade="700"
          text="Button"
          fontSize="base"
          hieght="8"
          leftIcon={true}
        />
        {/* <Button color="Primary" shade="900" text="Button" /> */}
        <Button
          color="Success"
          shade="700"
          text="Button"
          fontSize="base"
          hieght="8"
          leftIcon={true}
        />
        <Button
          color="Error"
          shade="500"
          text="Button"
          fontSize="base"
          hieght="8"
          leftIcon={true}
        />
        <Button
          color="Warning"
          shade="700"
          text="Button"
          fontSize="base"
          hieght="8"
          leftIcon={true}
        />
        <Button
          color="Natural"
          shade="400"
          text="Button"
          fontSize="base"
          hieght="8"
          leftIcon={true}
        />
        {/* <button text="Button" className="bg-Natural-400 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button> */}
        {/* <button text="Button" className="bg-Primary-50 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Primary-300 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Primary-500 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Primary-700 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Primary-900 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>


        <button text="Button" className="bg-Success-50 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Success-300 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Success-500 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Success-700 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Success-900 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>


        <button text="Button" className="bg-Warning-50 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Warning-300 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Warning-500 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Warning-700 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Warning-900 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>

        <button text="Button" className="bg-Error-50 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Error-300 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Error-500 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Error-700 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Error-900 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>

        <button text="Button" className="bg-Shades-0 font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Shades-100 text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Shades-yellow text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button>
        <button text="Button" className="bg-Shades-red text-white font-semibold py-2 px-4 rounded-full inline-flex p-1 justify-center items-center gap-2" >Text</button> */}
        <Button
          color="Primary"
          shade="700"
          text="Button"
          fontSize="2xl"
          hieght="10"
          leftIcon={true}
        />
        <Button
          color="Success"
          shade="700"
          text="Button"
          fontSize="2xl"
          hieght="10"
          leftIcon={true}
        />
        <Button
          color="Error"
          shade="500"
          text="Button"
          fontSize="2xl"
          hieght="10"
          leftIcon={true}
        />
        <Button
          color="Warning"
          shade="700"
          text="Button"
          fontSize="2xl"
          hieght="10"
          leftIcon={true}
        />
        <Button
          color="Natural"
          shade="400"
          text="Button"
          fontSize="2xl"
          hieght="10"
          leftIcon={true}
        />
        <Button
          color="Primary"
          shade="700"
          text="Button"
          fontSize="3xl"
          leftIcon={true}
        />
        <Button
          color="Success"
          shade="700"
          text="Button"
          fontSize="3xl"
          leftIcon={true}
        />
        <Button
          color="Error"
          shade="500"
          text="Button"
          fontSize="3xl"
          leftIcon={true}
        />
        <Button
          color="Warning"
          shade="700"
          text="Button"
          fontSize="3xl"
          leftIcon={true}
        />
        <Button
          color="Natural"
          shade="400"
          text="Button"
          fontSize="3xl"
          leftIcon={true}
        />
      </div>
      {/* <div className="flex flex-row items-center justify-center">

        <Button color="Primary" shade="700" text="Button"  fontSize="2xl"/>

        <Button color="Success" shade="700" text="Button"  fontSize="2xl"/>

        <Button color="Error" shade="500" text="Button"  fontSize="2xl"/>

        <Button color="Warning" shade="700" text="Button"  fontSize="2xl"/>

        <Button color="Natural" shade="400" text="Button"  fontSize="2xl"/>

      </div> */}
      <div className="flex flex-row justify-center m-2">
        <Button
          color="Primary"
          shade="700"
          text="Button"
          fontSize="lg"
          hieght="8"
          rightIcon={true}
        />

        <Button
          color="Success"
          shade="700"
          text="Button"
          fontSize="base"
          hieght="8"
          rightIcon={true}
        />

        <Button
          color="Error"
          shade="500"
          text="Button"
          fontSize="base"
          hieght="8"
          rightIcon={true}
        />

        <Button
          color="Warning"
          shade="700"
          text="Button"
          fontSize="base"
          hieght="8"
          rightIcon={true}
        />

        <Button
          color="Natural"
          shade="400"
          text="Button"
          fontSize="base"
          hieght="8"
          rightIcon={true}
        />

        <Button
          color="Primary"
          shade="700"
          text="Button"
          fontSize="2xl"
          hieght="10"
          rightIcon={true}
        />

        <Button
          color="Success"
          shade="700"
          text="Button"
          fontSize="2xl"
          hieght="10"
          rightIcon={true}
        />

        <Button
          color="Error"
          shade="500"
          text="Button"
          fontSize="2xl"
          hieght="10"
          rightIcon={true}
        />

        <Button
          color="Warning"
          shade="700"
          text="Button"
          fontSize="2xl"
          hieght="10"
          rightIcon={true}
        />

        <Button
          color="Natural"
          shade="400"
          text="Button"
          fontSize="2xl"
          hieght="10"
          rightIcon={true}
        />

        <Button
          color="Primary"
          shade="700"
          text="Button"
          fontSize="3xl"
          rightIcon={true}
        />

        <Button
          color="Success"
          shade="700"
          text="Button"
          fontSize="3xl"
          rightIcon={true}
        />

        <Button
          color="Error"
          shade="500"
          text="Button"
          fontSize="3xl"
          rightIcon={true}
        />

        <Button
          color="Warning"
          shade="700"
          text="Button"
          fontSize="3xl"
          rightIcon={true}
        />

        <Button
          color="Natural"
          shade="400"
          text="Button"
          fontSize="3xl"
          rightIcon={true}
        />
      </div>
      <div className="flex flex-row justify-center m-2">
        <ButtonOutler
          color="Primary"
          text="Button"
          fontSize="base"
          shade="700"
          bgColor="Primary"
          bgShade="300"
          hieght="8"
          leftIcon={true}
        />

        <ButtonOutler
          color="Success"
          text="Button"
          fontSize="base"
          shade="700"
          bgColor="Success"
          bgShade="50"
          hieght="8"
          leftIcon={true}
        />

        <ButtonOutler
          color="Error"
          text="Button"
          fontSize="base"
          shade="500"
          bgColor="Error"
          bgShade="50"
          hieght="8"
          leftIcon={true}
        />

        <ButtonOutler
          color="Warning"
          text="Button"
          fontSize="base"
          shade="700"
          bgColor="Warning"
          bgShade="50"
          hieght="8"
          leftIcon={true}
        />

        <ButtonOutler
          color="Natural"
          text="Button"
          fontSize="base"
          shade="400"
          bgColor="Natural"
          bgShade="100"
          hieght="8"
          leftIcon={true}
        />

        <ButtonOutler
          color="Primary"
          text="Button"
          fontSize="2xl"
          shade="700"
          bgColor="Primary"
          bgShade="300"
          hieght="10"
          leftIcon={true}
        />

        <ButtonOutler
          color="Success"
          text="Button"
          fontSize="2xl"
          shade="700"
          bgColor="Success"
          bgShade="50"
          hieght="10"
          leftIcon={true}
        />

        <ButtonOutler
          color="Error"
          text="Button"
          fontSize="2xl"
          shade="500"
          bgColor="Error"
          bgShade="50"
          hieght="10"
          leftIcon={true}
        />

        <ButtonOutler
          color="Warning"
          text="Button"
          fontSize="2xl"
          shade="700"
          bgColor="Warning"
          bgShade="50"
          hieght="10"
          leftIcon={true}
        />

        <ButtonOutler
          color="Natural"
          text="Button"
          fontSize="2xl"
          shade="400"
          bgColor="Natural"
          bgShade="100"
          hieght="10"
          leftIcon={true}
        />

        <ButtonOutler
          color="Primary"
          text="Button"
          fontSize="3xl"
          shade="700"
          bgColor="Primary"
          bgShade="300"
          leftIcon={true}
        />

        <ButtonOutler
          color="Success"
          text="Button"
          fontSize="3xl"
          shade="700"
          bgColor="Success"
          bgShade="50"
          leftIcon={true}
        />

        <ButtonOutler
          color="Error"
          text="Button"
          fontSize="3xl"
          shade="500"
          bgColor="Error"
          bgShade="50"
          leftIcon={true}
        />

        <ButtonOutler
          color="Warning"
          text="Button"
          fontSize="3xl"
          shade="700"
          bgColor="Warning"
          bgShade="50"
          leftIcon={true}
        />

        <ButtonOutler
          color="Natural"
          text="Button"
          fontSize="3xl"
          shade="400"
          bgColor="Natural"
          bgShade="100"
          leftIcon={true}
        />
      </div>
      <div className="flex flex-row justify-center m-2">
        <ButtonOutler
          color="Primary"
          text="Button"
          fontSize="base"
          shade="700"
          bgColor="Primary"
          bgShade="300"
          hieght="8"
          rightIcon={true}
        />

        <ButtonOutler
          color="Success"
          text="Button"
          fontSize="base"
          shade="700"
          bgColor="Success"
          bgShade="50"
          hieght="8"
          rightIcon={true}
        />

        <ButtonOutler
          color="Error"
          text="Button"
          fontSize="base"
          shade="500"
          bgColor="Error"
          bgShade="50"
          hieght="8"
          rightIcon={true}
        />

        <ButtonOutler
          color="Warning"
          text="Button"
          fontSize="base"
          shade="700"
          bgColor="Warning"
          bgShade="50"
          hieght="8"
          rightIcon={true}
        />

        <ButtonOutler
          color="Natural"
          text="Button"
          fontSize="base"
          shade="400"
          bgColor="Natural"
          bgShade="100"
          hieght="8"
          rightIcon={true}
        />

        <ButtonOutler
          color="Primary"
          text="Button"
          fontSize="2xl"
          shade="700"
          bgColor="Primary"
          bgShade="300"
          hieght="10"
          rightIcon={true}
        />

        <ButtonOutler
          color="Success"
          text="Button"
          fontSize="2xl"
          shade="700"
          bgColor="Success"
          bgShade="50"
          hieght="10"
          rightIcon={true}
        />

        <ButtonOutler
          color="Error"
          text="Button"
          fontSize="2xl"
          shade="500"
          bgColor="Error"
          bgShade="50"
          hieght="10"
          rightIcon={true}
        />

        <ButtonOutler
          color="Warning"
          text="Button"
          fontSize="2xl"
          shade="700"
          bgColor="Warning"
          bgShade="50"
          hieght="10"
          rightIcon={true}
        />

        <ButtonOutler
          color="Natural"
          text="Button"
          fontSize="2xl"
          shade="400"
          bgColor="Natural"
          bgShade="100"
          hieght="10"
          rightIcon={true}
        />

        <ButtonOutler
          color="Primary"
          text="Button"
          fontSize="3xl"
          shade="700"
          bgColor="Primary"
          bgShade="300"
          rightIcon={true}
        />

        <ButtonOutler
          color="Success"
          text="Button"
          fontSize="3xl"
          shade="700"
          bgColor="Success"
          bgShade="50"
          rightIcon={true}
        />

        <ButtonOutler
          color="Error"
          text="Button"
          fontSize="3xl"
          shade="500"
          bgColor="Error"
          bgShade="50"
          rightIcon={true}
        />

        <ButtonOutler
          color="Warning"
          text="Button"
          fontSize="3xl"
          shade="700"
          bgColor="Warning"
          bgShade="50"
          rightIcon={true}
        />

        <ButtonOutler
          color="Natural"
          text="Button"
          fontSize="3xl"
          shade="400"
          bgColor="Natural"
          bgShade="100"
          rightIcon={true}
        />
      </div>
      <div className="flex flex-row justify-center m-2">
        <DownloadIcon
          color="Primary"
          shade="700"
          bgColor="Primary"
          bgShade="300"
          size="6"
        />

        <DownloadIcon
          color="Primary"
          shade="700"
          bgColor="Natural"
          bgShade="100"
          size="6"
        />

        <DownloadIcon
          color="Success"
          shade="700"
          bgColor="Success"
          bgShade="50"
          size="6"
        />

        <DownloadIcon
          color="Error"
          shade="700"
          bgColor="Error"
          bgShade="50"
          size="6"
        />

        <DownloadIcon
          color="Warning"
          shade="700"
          bgColor="Warning"
          bgShade="50"
          size="6"
        />

        <DownloadIcon
          color="Natural"
          shade="500"
          bgColor="Natural"
          bgShade="100"
          size="6"
        />

        <DownloadIcon
          color="Shades"
          shade="0"
          bgColor="Primary"
          bgShade="700"
          size="6"
        />

        <DownloadIcon
          color="Shades"
          shade="0"
          bgColor="Success"
          bgShade="700"
          size="6"
        />

        <DownloadIcon
          color="Shades"
          shade="0"
          bgColor="Error"
          bgShade="500"
          size="6"
        />

        <DownloadIcon
          color="Shades"
          shade="0"
          bgColor="Warning"
          bgShade="700"
          size="6"
        />

        <DownloadIcon
          color="Shades"
          shade="0"
          bgColor="Natural"
          bgShade="400"
          size="6"
        />
      </div>
      <DashboardButton
        color="Natural"
        shade="50"
        text="Dashboard"
        textColor="Primary"
        textShade="700"
        fontSize="xl"
        justify="start"
        withText="true"
      />
      <br />
      <br />
      <DashboardButton
        color="Natural"
        shade="50"
        text="Dashboard"
        textColor="Primary"
        textShade="700"
        fontSize="xl"
        justify="center"
        withText="true"
      />
      <br />
      <br />
      <DashboardButton
        color="Natural"
        shade="50"
        text="Dashboard"
        textColor="Primary"
        textShade="700"
        fontSize="xl"
        justify="end"
        withText="true"
      />
      <br /> <br />
      {/* gray */}
      <DashboardButton
        color="Shades"
        shade="0"
        text="Dashboard"
        textColor="Natural"
        textShade="400"
        fontSize="xl"
        justify="start"
        withText="true"
      />
      <br />
      <br />
      <DashboardButton
        color="Shades"
        shade="0"
        text="Dashboard"
        textColor="Natural"
        textShade="400"
        fontSize="xl"
        justify="center"
        withText="true"
      />
      <br />
      <br />
      <DashboardButton
        color="Shades"
        shade="0"
        text="Dashboard"
        textColor="Natural"
        textShade="400"
        fontSize="xl"
        justify="end"
        withText="true"
      />
      <br /> <br />
      {/* red */}
      <DashboardButton
        color="Error"
        shade="50"
        text="Dashboard"
        textColor="Error"
        textShade="500"
        fontSize="xl"
        justify="start"
        withText="true"
      />
      <br />
      <br />
      <DashboardButton
        color="Error"
        shade="50"
        text="Dashboard"
        textColor="Error"
        textShade="500"
        fontSize="xl"
        justify="center"
        withText="true"
      />
      <br />
      <br />
      <DashboardButton
        color="Error"
        shade="50"
        text="Dashboard"
        textColor="Error"
        textShade="500"
        fontSize="xl"
        justify="end"
        withText="true"
      />
      <br /> <br />
      <DashboardButton
        color="Shades"
        shade="0"
        textColor="Natural"
        textShade="400"
        fontSize="xl"
        justify="center"
        withText={false}
      />
      <br />
      <br />
      <DashboardButton
        color="Error"
        shade="50"
        textColor="Error"
        textShade="500"
        fontSize="xl"
        justify="start"
        withText={false}
      />
    </div>
  );
}

export default App;

// const ButtonLeft = ({ color, text, shade, fontSize, hieght }) => {
//   const buttonClasses = `bg-${color}-${shade} text-Shades-0 font-semibold px-4 rounded-full inline-flex p-1 justify-center items-center gap-2 text-${fontSize} h-${hieght}`;

//   return (
//     <button className={buttonClasses}>
//       {text}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         class="w-6 h-6"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//         />
//       </svg>
//     </button>
//   );
// };

// const ButtonOutlerLeft = ({
//   color,
//   text,
//   fontSize,
//   shade,
//   bgColor,
//   bgShade,
//   hieght,
// }) => {
//   const buttonClasses = `inline-flex text-${color}-${shade} font-semibold px-4 justify-center items-center gap-2 rounded-full border-2 border-${color}-${shade} bg-${bgColor}-${bgShade} text-${fontSize}  h-${hieght}`; // py-2

//   return (
//     <button className={buttonClasses}>
//       {text}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         class="w-6 h-6"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//         />
//       </svg>
//     </button>
//   );
// };
