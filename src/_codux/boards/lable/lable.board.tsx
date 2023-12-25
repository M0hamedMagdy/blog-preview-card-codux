import { createBoard } from '@wixc3/react-board';
import { Lable } from '../../../components/lable/lable';

export default createBoard({
    name: 'Lable',
    Board: () => <Lable />,
    isSnippet: true,
});
