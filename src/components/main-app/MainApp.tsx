/* eslint-disable */
import {
  FunctionComponent,
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useKeyPressCallback from '../../hooks/useKeyPress';
import { handleMove } from '../../store/matrix/actions';
import { matrixSelector } from '../../store/matrix/selectors';
import { Movement } from '../../store/matrix/types';

const MainApp: FunctionComponent = () => {
  const dispatch = useDispatch();
  const matrix = useSelector(matrixSelector);
  const [roombaOrientationClassNames, setRoombaOrientationClassNames] =
    useState('');

  const handleMoveTarget = (key: Movement) => {
    dispatch(handleMove(key));

    if (key === 'ArrowLeft') {
      setRoombaOrientationClassNames('-rotate-90');
    }

    if (key === 'ArrowUp') {
      setRoombaOrientationClassNames('');
    }

    if (key === 'ArrowDown') {
      setRoombaOrientationClassNames('rotate-180');
    }

    if (key === 'ArrowRight') {
      setRoombaOrientationClassNames('rotate-90');
    }
  };

  useKeyPressCallback(handleMoveTarget);

  useEffect(() => {
    console.log({ roombaOrientationClassNames });
  }, [roombaOrientationClassNames]);

  const renderBlock = (item: string, key: string) => {
    const className = `bg-white border border-1 w-20 h-20 ${
      item ? 'roomba-image' : ''
    } ${roombaOrientationClassNames}`;
    return <div key={key} className={className} />;
  };

  return (
    <div className="flex w-full h-screen bg-gray-100 items-center justify-center px-40">
      <div className="flex justify-center border border-2 border-black">
        {matrix.map((cols, iCol) => (
          <div key={iCol} className="flex-inline">
            {cols.map((item: any, iRow: any) =>
              renderBlock(item, `${iCol}${iRow}`)
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainApp;
/* eslint-enable */
