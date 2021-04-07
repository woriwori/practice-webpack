# vue-boiler-plate
```javascript
splitChunks = {
  // 모듈들(src/하위의 파일들 전부..)이 entry 파일(client.js)에 포함될 때
  // 여러 모듈들이 import loadash를 하면 여러번 loadash를 Import하는 거.. 인가?
  // 암튼 그래서 공통 의존성을 분리, 즉 코드 스플리팅을 해서 파일 조각을 생성하는게
  // 청크 조각을 생성하는 거고 그게 splitChunks 옵션이다.
  cacheGroups: { // 특정 조건으로 chunk를 만들어라
    vendor: {
      chunks: 'initial',
      // 어떤 청크들을 split 할지
      // all : 동기/비동기 모두 청크에 추가 (initial + async)
      // initial : 초기 로드(???)되는 것만 청크에 추가 (동적 로드하는 거 아니면 다 이거같음? 맞나?)
      // async : 동적 로드되는 것만 청크에 추가
      name: 'vendor',
      enforce: true
      // 청크의 minSize, minChunks, maxAsyncRequests, maxInitialRequests옵션을 무시하고 항상 생성하라는 의미
    }
  }
}
```
