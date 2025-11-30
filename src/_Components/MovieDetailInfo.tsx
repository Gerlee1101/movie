// import { Separator } from "@radix-ui/react-dropdown-menu";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Movie } from "@/_Components/MovieSectionList";

// export type Cast= 
//     {
//       "adult": boolean,
//       "gender": number,
//       "id": number,
//       "known_for_department": string,
//       "name": string,
//       "original_name": string,
//       "popularity": number,
//       "profile_path": string,
//       "cast_id": number,
//       "character": string,
//       "credit_id": string,
//       "order": number,
//     };
// type Params = {
//   movieId: string;
// };
// export const MovieDetailInfo = () => {
//   const { movieId } = useParams<Params>();
//   //   const { categoryName, title, showButton } = props;
//   const [cast, setCast] = useState<Movie>();
//   // const [video, setVideo] = useState<string>("");
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/credits`,
//         // `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw`,
//           },
//         }
//       );
//     }
//      fetchData();
// },[]);
// return(<div className=" bg-muted">
//           <p className="font-bold text-muted-foreground">Director</p>
//           <p>{}</p>
//           <Separator className="bg-gray-300 w-[1080px] h-px"/>
//         </div>
//         )
//     }

import { Separator } from "@radix-ui/react-dropdown-menu";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

type Params = {
  movieId: string;
};

export const MovieDetailInfo = () => {
  const { movieId } = useParams<Params>();
  const [cast, setCast] = useState<Cast[]>([]);
  const [crew, setCrew] = useState<Crew[]>([]);
 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iOi...`,
          },
        }
      );

      const data = await res.json();

      setCast(data.Cast);
      console.log(data);
    //   setCrew(data.crew);

    

    };

    fetchData();
  }, [movieId]);

  return (
    <div className="bg-muted">
      <p className="font-bold text-muted-foreground">Director</p>
      <p>{}</p>

      <Separator className="bg-gray-300 w-[1080px] h-px" />
    </div>
  );
};
