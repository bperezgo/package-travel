import { PuzzlePiece } from '../../types';

type PackageTravelData = {
  id: string;
  puzzlePieces: PuzzlePiece[];
};

const packageTravelStore: PackageTravelData = {
  id: '',
  puzzlePieces: [],
};

export default packageTravelStore;
