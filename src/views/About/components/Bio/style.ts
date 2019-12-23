import styled from 'styled-components';
import { size, margin } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';
import { palette } from '@styles/colors';

const BioContainer = styled.div`
    margin-top: 3rem;

    h2 {
        display: block;
        ${size(2)};
        line-height: 1.5
        color: ${palette.grey[600]};
        ${useTitleFont}
    }

    h1 {
        ${size(8)};
        line-height: 0.8;
        ${margin('bottom', 1)};
        ${useTitleFont}
        font-weight: 800;
    }

    p {
        ${margin('bottom', 0.5)};
        ${size(0)};
        line-height: 1.5;
    }

    hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(90deg, transparent, rgba(0,0,0,.1), transparent);
        ${margin('top', 1)}
        ${margin('bottom', 1)}
    }
`;

export { BioContainer };
