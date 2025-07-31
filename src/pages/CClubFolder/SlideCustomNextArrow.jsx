import { createElement} from 'react';

export function SlideCustomNextArrow(props) {
  const { onClick } = props;

  return createElement(
    'button', 
    { className: 'slick-next pull-right',
      type:'button'
     },
    <img src='/Arrow5.png' onClick={onClick} />
  );
}
