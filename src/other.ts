// const handleKeyDown = (e: KeyboardEvent) => {
//   switch (e.key) {
//     case "ArrowUp":
//       setDirection("UP");
//       break;
//     case "ArrowDown":
//       setDirection("DOWN");
//       break;
//     case "ArrowLeft":
//       setDirection("LEFT");
//       break;
//     case "ArrowRight":
//       setDirection("RIGHT");
//       break;
//     // default:
//       break;
//   }
// };
//
// useEffect(() => {
//   window.addEventListener("keydown", handleKeyDown);
//   return () => window.removeEventListener("keydown", handleKeyDown);
// }, []);
//
// useEffect(() => {
//   const checkCollision = () => {
//     const head = snake[0];
//     if (head.x < 0 || head.y < 0 || head.x > 19 || head.y > 19) {
//       setGameOver(true);
//     }
//     for (let i = 1; i < snake.length; i++) {
//       if (snake[i].x === head.x && snake[i].y === head.y) {
//         setGameOver(true);
//       }
//     }
//   };
//   checkCollision();
// }, [snake]);
