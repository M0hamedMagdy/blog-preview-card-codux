import { createBoard } from '@wixc3/react-board';
import App from '../../../Card';

export default createBoard({
    name: 'Card',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1440
    },
    isSnippet: true
});
