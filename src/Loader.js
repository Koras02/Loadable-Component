import loadable from '@loadable/component';

// // 동적 요소 가져오기
// const OtherComponent = loadable(() => import ('./OtherComponent'))

// 완전 동적 가져오기 
// const loadFile = file => import ( `./ $ { file } ` )

// @loadable / component 에서 로드 기능 가져오기
const AsyncPage = loadable(props => import (`./${props.page}`))

function Loader() {
     return (
       <div>
          <AsyncPage page="Home" />
          <AsyncPage page="Contact" />
       </div>
     );
 }


 export default Loader;