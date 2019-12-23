import { palette } from '@styles/colors';

const underline = `
    border-bottom: 1px ${palette.grey[400]} dashed;
    &:hover {
        border-bottom-color: ${palette.grey[800]};
    }
`;

export { underline };
