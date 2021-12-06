## 为什么用 React Hooks？

React 的核心是组件。v16.8 版本之前，组件的标准写法是类（class）。

Redux 的作者 Dan Abramov 总结了组件类的几个缺点。

- 大型组件很难拆分和重构，也很难测试。
- 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
- this、bind 指意不明

React 团队希望，组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要，组合管道即可。 组件的最佳写法应该是函数，而不是类。

React 早就支持函数组件，下面就是一个例子。

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

但是，这种写法有重大限制，必须是纯函数，不能包含状态，也不支持生命周期方法，因此无法取代类。

**React Hooks 的设计目的，就是加强版函数组件，完全不使用"类"，就能写出一个全功能的组件。**

## 什么是 React Hooks?

Hook 这个单词的意思是”钩子”。

**React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码”钩”进来。** React Hooks 就是那些钩子。

你需要什么功能，就使用什么钩子。React 默认提供了一些常用钩子，你也可以封装自己的钩子。

所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用 use 前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。

下面介绍 React 默认提供的四个最常用的钩子。

- useState()
- useContext()
- useReducer()
- useEffect()

### useState 状态钩子

- useState()用于为函数组件引入状态（state）。纯函数不能有状态，所以把状态放在钩子里面。

```js
import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Click me,   please");

  function handleClick() {
    return setButtonText("Thanks, been clicked!");
  }

  return <button onClick={handleClick}>{buttonText}</button>;
}
```

### useContext 共享状态钩子

如果需要在组件之间共享状态，可以使用 useContext()。
现在有两个组件 Navbar 和 Messages，我们希望它们之间共享状态。

```js
const AppContext = React.createContext({});

const Navbar = () => {
  const { username } = useContext(AppContext);

  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  );
};

const Messages = () => {
  const { username } = useContext(AppContext);

  return (
    <div className="messages">
      <h1>Messages</h1>
      <p>1 message for {username}</p>
      <p className="message">useContext is awesome!</p>
    </div>
  );
};

function App() {
  return (
    <AppContext.Provider
      value={{
        username: "superawesome",
      }}
    >
      <div className="App">
        <Navbar />
        <Messages />
      </div>
    </AppContext.Provider>
  );
}
```

### useReducer action 钩子

`const [state, dispatch] = useReducer(reducer, initialState);`

- 上面是 useReducer()的基本用法，它接受 Reducer 函数和状态的初始值作为参数，返回一个数组。数组的第一个成员是状态的当前值，第二个成员是发送 action 的 dispatch 函数。

```js
const myReducer = (state, action) => {
  switch(action.type)  {
    case('countUp'):
      return  {
        ...state,
        count: state.count + 1
      }
    default:
      return  state;
  }
}

function App() {
  const [state, dispatch] = useReducer(myReducer, { count:   0 });
  return  (
    <div className="App">
      <button onClick={() => dispatch({ type: 'countUp' })}>
        +1
      </button>
      <p>Count: {state.count}</p>
    </div>
  );

```

- 由于 Hooks 可以提供共享状态和 Reducer 函数，所以它在这些方面可以取代 Redux。但是，它没法提供中间件（middleware）和时间旅行（time travel），如果你需要这两个功能，还是要用 Redux。

### useEffect 副作用钩子

useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在 componentDidMount 里面的代码，现在可以放在 useEffect()。

useEffect()的用法如下。

```js
useEffect(() => {
  // Async Action
}, [dependencies]);
```

上面用法中，useEffect()接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，useEffect()就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行 useEffect()。

```js
const Person = ({ personId }) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
        setLoading(false);
      });
  }, [personId]);

  if (loading === true) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  );
};
```

- react hooks 底层是链表实现的，所以不能用 if else 做判断。

### React hooks 动机

- 在组件之间复用状态逻辑很难
- 复杂组件变得难以理解
- 难以理解的 class
