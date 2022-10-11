import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';

const GithubTabs = styled(Tabs)`
& {
  min-height: initial;
}
& .MuiTabs-indicator {
  background-color: #F78166;
}
`;


export default GithubTabs;
