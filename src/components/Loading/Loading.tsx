import { Container, Loader } from "./Loading.styled";

export default function Loading() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}

// function ImageLoader() {
//   const [loading, setLoading] = useState(true);

//   // Симулируем загрузку изображения
//   const loadImage = () => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Установите время загрузки по вашему усмотрению
//   };

//   return (
//     <div>
//       {loading && (
//         <div className="loader-container">
//           <div className="loader" />
//         </div>
//       )}

//       <img
//         src="path/to/your/image.jpg"
//         onLoad={() => setLoading(false)}
//         style={{ display: loading ? 'none' : 'block' }}
//       />

//       <button onClick={loadImage}>Show More</button>
//     </div>
//   );
// }
