import React from 'react';
import BoardgameCard from './BoardgameCard';
import { Link } from 'react-router-dom';

type Games = {
  id: number;
  name: string;
  picUrl: any;
};

type BoardgameCardType = {
  data: Array<Games>;
};

const BoardgameContent: React.FC<BoardgameCardType> = ({ data }) => {
  return (
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-8 w-full h-[calc(100%-132px)]">
        {data.map((game) => (
            <Link className='w-full' key={game.id} to={`/boardgame/${game.id}`}>
            <BoardgameCard name={game.name} picUrl={game.picUrl} />
            </Link>
        ))}
        </div>
  );
};

export default BoardgameContent;
