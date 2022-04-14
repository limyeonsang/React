## Hooks

- useState: 파라미터에는 기본값을 전달. 배열을 리턴하는데, 배열의 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수임 상태 설정 함수에 파라미터를 넣어 호출하면 상태 값이 바뀜

- useEffect: 컴포넌트가 렌더링될 떄마다 특정 작업을 수행하도록 설정가능,
  - 마운트될 때만 실행하려면 함수의 두 번째 파라미터로 빈 배열을 넣어 주면 됨
    ```javascript
    useEffect(() => {
      console.log("run on mount");
    }, []);
    ```
  - 특정 값이 업데이트 될 때만 실행하려면 두 번째 파라미터 배열에 검사하고픈 값을 넣어주면 됨
    ```javascript
    useEffect(() => {
      console.log(name);
    }, [name]);
    ```
  - cleanup: 컴포넌트가 언마운트 되기 전이나 업데이트 전에 작업을 수행하고 싶다면 cleanup함수를 반환해야함
    ```javascript
    useEffect(() => {
      console.log("effect");
      console.log(name);
      return () => {
        console.log("cleanup");
        console.log(name);
      };
    });
    ```
