import React from 'react';
import { styled } from '@mui/material/styles';

const DiscussionTimelineItem = styled(({ className, ...rest }: any) => (
  <div className={className + " discussion-timeline-item"} {...rest} />
))`
& {
  position: relative;
  display: flex;
  padding: 16px 0;
  margin-left: 16px;
  color: #8b949e;
}
&:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 2px;
  content: "";
  background-color: #21262d;
}
`

export default DiscussionTimelineItem
