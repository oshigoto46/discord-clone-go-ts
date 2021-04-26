"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
// describe('App', () => {
//     it('renders App component', () => {
//         render(<Button />);
//       // fails
//      // expect(screen.getByText('Search')).toBeInTheDocument();
//     });
// });
describe('App', () => {
    test('renders App component', () => {
        react_1.render(/>);
        // fails
        , 
        // fails
        it(react_1.screen.getByText('Search')).toBeInTheDocument());
        // succeeds
        it(react_1.screen.getByText('Search:')).toBeInTheDocument();
        // succeeds
        it(react_1.screen.getByText(/Search/)).toBeInTheDocument();
    });
});
//# sourceMappingURL=render.test.js.map