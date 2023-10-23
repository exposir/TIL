![](../static/图解%20Vue%20Compositions%20API-1.png)

## Reactivity

在 Vue 3 中，响应式编程是其核心特性之一。通过使用 **`ref`**, **`reactive`**, 和 **`computed`** 等 API，你可以创建和管理响应式数据。下面是如何使用这些工具的详细解释和代码示例。

### Refs 用于基础类型

`ref` 用于创建一个响应式引用，通常用于**基础类型（如数字、字符串等）。**

```JavaScript
import { ref } from 'vue';

const myValue = ref(0); // 初始值为 0

// myValue 现在是一个响应式引用
// 你可以通过 myValue.value 访问或修改它的值
```

### Reactive 用于对象

与 `ref` 不同，`reactive` 用于创建**响应式对象。**这通常用于更复杂的数据结构，如**对象和数组。**

```JavaScript
import { reactive } from 'vue';

const myObject = reactive({ key: 'value' });

// myObject 现在是一个响应式对象
// 直接访问或修改它的属性即可触发响应式更新
```

### Computed 用于计算属性

`computed` 用于创建响应式的计算属性。这在你需要**基于其他响应式引用或对象计算新值**时非常有用。

```JavaScript
import { ref, computed } from 'vue';

const myValue = ref(0);
const myComputed = computed(() => myValue.value + 1);

// myComputed 现在是一个响应式的计算属性
// 它会自动更新，以反映 myValue 的最新状态
```

这些基础的响应式 API 提供了创建动态、交互式前端应用程序的强大工具。`ref` 主要用于基础类型，而 `reactive` 更适用于复杂类型。`computed` 则用于创建依赖其他响应式数据的计算属性。这些 API 以及它们的行为提供了在组件和整个应用中有效管理状态的机制。通过合理使用这些工具，你可以构建出具有高度交互性和响应速度的应用。

## Watchers

在 Vue 3 中，`watch` 和 `watchEffect` 是用于侦听响应式变量和执行副作用（side-effects）的强大工具。它们有多种用法，使得你可以轻松地在变量更改时运行特定逻辑。

### Watchers 用于单一值

你可以使用 `watch` 来**侦听一个响应式引用（ref）或计算值（computed）。**

```JavaScript
import { ref, watch } from 'vue';

const myValue = ref(0);

watch(myValue, (newValue, oldValue) => {
  console.log(`myValue changed from ${oldValue} to ${newValue}`);
});
```

在这个例子中，每当 `myValue` 改变时，都会触发回调函数，并且你可以访问新的和旧的值。

### Watchers 用于多个值

**`watch`** 也可以**侦听一个数组的多个响应式引用。**

```JavaScript
import { ref, watch } from 'vue';

const one = ref(1);
const two = ref(2);

watch([one, two], ([newOne, newTwo], [oldOne, oldTwo]) => {
  console.log(`one changed from ${oldOne} to ${newOne}`);
  console.log(`two changed from ${oldTwo} to ${newTwo}`);
});
```

### 非响应式值和深度观察

使用 **`watch`** 的回调形式，你可以观察非响应式值，而且还可以用 `deep: true` 选项进行**深度观察。**

```JavaScript
import { watch } from 'vue';

const object = { key: 'value' };

watch(
  () => object.key,
  (newValue, oldValue) => {
    console.log(`object.key changed from ${oldValue} to ${newValue}`);
  },
  { deep: true }
);
```

### watchEffect

另一种方便的方法是使用 **`watchEffect`**，它自动收集依赖并在依赖改变时运行。

```JavaScript
import { ref, watchEffect } from 'vue';

const myValue = ref(0);
const anotherValue = ref(10);

watchEffect(() => {
  console.log(`Current values: ${myValue.value}, ${anotherValue.value}`);
});
```

在这个例子中，无论 `myValue` 或 `anotherValue` 何时改变，`watchEffect` 都会重新运行。

总结一下，`watch` 和 `watchEffect` 在 Vue 3 中提供了高度灵活的方式来观察响应式和非响应式数据，执行副作用，以及组织代码逻辑。你可以侦听单个值、多个值、深度观察对象，或者自动侦听回调中使用的所有响应式引用，这为你的应用提供了极大的灵活性。

## Props / Events

在 Vue 3 中，**组件之间的通信主要通过 Props 和 Events 实现。Props** 用于从父组件向子组件传递数据，而 **Events** 用于子组件向父组件发送消息。

### 定义和使用 Props

在子组件中，你可以使用 `props` 选项来定义可以接收的属性。在 Composition API 中，你也可以使用 `defineProps`。

```JavaScript
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  setup() {
    // 使用 defineProps 获取 Props
    const props = defineProps();

    // 现在 props.title 和 props.likes 是响应式的
  }
});
```

父组件中，你可以这样传递 props：

```HTML
<MyComponent :title="'Hello'" :likes="5" />
```

### 定义和触发 Events

子组件可以用来触发自定义事件，通知父组件某个操作或状态的变化。在 Composition API 中，你可以使用 **`defineEmits`** 函数。

```JavaScript
import { defineComponent, defineEmits } from 'vue';

export default defineComponent({
  emits: ['inFocus', 'submit'],
  setup() {
    // 使用 defineEmits 获取 emit 函数
    const emit = defineEmits();

    // 用 emit 触发事件
    const handleFocus = () => {
      emit('inFocus');
    };

    const handleSubmit = () => {
      emit('submit');
    };

    return { handleFocus, handleSubmit };
  }
});
```

父组件可以监听这些事件并执行相应的操作：

```HTML
<MyComponent @inFocus="handleInFocus" @submit="handleSubmit" />
```

通过这种方式，Vue 3 提供了一套完整且灵活的机制，用于处理组件间的通信。`props` 和 `emits` 分别负责父子组件之间的数据流和事件通知，使得你能够构建出高度解耦、可维护的应用程序。这两者在组件设计和应用架构中都起到了非常重要的作用。

## Lifecycle Hooks

在 Vue 3 中，**生命周期钩子（Lifecycle Hooks）是用于在组件的不同阶段执行特定逻辑的函数。**使用 Composition API，这些钩子以 **`onXXX`** 的形式出现，如 **`onMounted`**, **`onBeforeUpdate`** 等。

### 常用的生命周期钩子

#### onBeforeCreate 和 onBeforeMount

**`onBeforeCreate`** 和 **`onBeforeMount`** 钩子函数**在组件创建或挂载之前触发**，通常用于设置一些初始化逻辑。

```JavaScript
import { onBeforeCreate, onBeforeMount } from 'vue';

export default {
  setup() {
    onBeforeCreate(() => {
      console.log('Component is about to be created.');
    });

    onBeforeMount(() => {
      console.log('Component is about to be mounted.');
    });
  },
};
```

#### onMounted

**`onMounted`** 钩子**在组件挂载完成后触发**，通常用于执行依赖 DOM 的操作。

```JavaScript
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      console.log('Component has been mounted.');
      // DOM-dependent logic here
    });
  },
};
```

#### onBeforeUpdate 和 onUpdated

**`onBeforeUpdate`** 和 **`onUpdated`** **在组件更新前后触发。这**里你通常会进行一些状态同步或者 DOM 更新。

```JavaScript
import { onBeforeUpdate, onUpdated } from 'vue';

export default {
  setup() {
    onBeforeUpdate(() => {
      console.log('Component is about to update.');
    });

    onUpdated(() => {
      console.log('Component has been updated.');
    });
  },
};
```

#### onBeforeUnmount 和 onUnmounted

**`onBeforeUnmount`** 和 **`onUnmounted`** **在组件卸载前后触发**，通常用于清理，如取消网络请求、清理定时器等。

```JavaScript
import { onBeforeUnmount, onUnmounted } from 'vue';

export default {
  setup() {
    onBeforeUnmount(() => {
      console.log('Component is about to be unmounted.');
    });

    onUnmounted(() => {
      console.log('Component has been unmounted.');
    });
  },
};
```

总体来说，Vue 3 提供的生命周期钩子使得在组件的不同阶段执行逻辑变得非常容易和直观。通过合理地使用这些钩子，你可以更好地管理组件状态，执行副作用，以及在适当的时机进行清理，从而使你的应用更健壮、可维护。

## Provide / Inject

**`provide`** **和** **`inject`** **是 Vue 3 中用于处理跨组件状态的一种高级模式。**这对于跨多级组件传递数据特别有用，尤其是在父组件和任意深度的后代组件之间。这避免了所谓的 **"prop drilling"**，即你不必将 props 逐层传递给每一个中间组件。

### Provide

在父组件（或祖先组件）中，你可以使用 **`provide`** 函数将数据或者方法提供给任何子组件（或后代组件）。

```JavaScript
import { defineComponent, provide } from 'vue';

export default defineComponent({
  setup() {
    const dataToProvide = 'some data';

    // 提供 'key' 和关联的数据给任何后代组件
    provide('key', dataToProvide);
  }
});
```

### Inject

在子组件（或后代组件）中，你可以使用 **`inject`** 函数来接收由 **`provide`** 提供的数据。

```JavaScript
import { defineComponent, inject } from 'vue';

export default defineComponent({
  setup() {
    // 从 'key' 中注入数据，如果没有找到则使用默认值 'default'
    const data = inject('key', 'default');

    // 现在 data 包含的就是由父组件或祖先组件提供的数据
  }
});
```

这种机制非常有用于跨多个层级共享状态或函数，例如主题设置、语言偏好等。需要注意的是，`provide` 和 `inject` 主要用于高级场景或库的开发，并不推荐在常规应用开发中过度使用，因为它们破坏了组件间明确的、可追踪的数据流，可能会导致代码难以维护和理解。

通过合理使用 `provide` 和 `inject`，你可以更灵活地管理组件树中的状态和逻辑，从而构建更加高效和可维护的 Vue 应用。

## Organize

在 Vue 3 的应用开发中，合理地组织代码是至关重要的。当你的组件或应用逐渐复杂时，将相关的逻辑和数据聚集在一起可以提高代码的可读性和可维护性。在 Composition API 中，**你可以用** **`ref`**, **`computed`**, 和 **`watch`** **等工具来按逻辑关注点（logical concern）组织代码。**

假设我们有一个用于处理博客帖子的组件，其中包括获取帖子、计算帖子总数以及监视帖子数组的变化。下面是如何组织这些功能的代码示例：

```JavaScript
import { ref, computed, watch, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    // 数据：存储博客帖子的数组
    const posts = ref([]);

    // 方法：获取博客帖子
    const fetchPosts = async function() {
      try {
        const response = await axios.get('/api/posts');
        posts.value = response.data;
      } catch (error) {
        console.error('An error occurred while fetching data: ', error);
      }
    };

    // 计算属性：计算帖子总数
    const totalPosts = computed(() => posts.value.length);

    // 副作用：监视帖子数组的变化
    watch(posts, (newPosts, oldPosts) => {
      console.log('Posts updated:', newPosts);
    });

    // 生命周期钩子：组件挂载后获取帖子
    onMounted(() => {
      fetchPosts();
    });

    return {
      posts,
      fetchPosts,
      totalPosts
    };
  }
};
```

在上面的代码中，我们首先定义了一个响应式引用 `posts` 来存储帖子数据。然后，我们定义了一个 `fetchPosts` 方法用于从 API 获取帖子。接着，我们使用 `computed` 创建了一个计算属性 `totalPosts`，该属性返回帖子的总数。最后，我们用 `watch` 来监视 `posts` 数组的变化，并在 `onMounted` 生命周期钩子中调用 `fetchPosts` 方法来填充 `posts` 数组。

通过这种方式，我们按逻辑关注点（数据、方法、计算属性、副作用）将代码组织在了一起，使其更加整洁和可读。这也有助于后续的维护和扩展。这就是 Vue 3 和 Composition API 提供的强大的代码组织能力。

## Reuse you code

在 Vue 3 中，使用 Composition API 的 **`composables`** 是一种非常有效的代码复用方式。一个常见的应用场景是 API 调用和数据获取。下面的例子展示了如何创建一个名为 `usePost` 的 composable 函数，该函数处理与帖子（posts）相关的逻辑，包括获取帖子、计算帖子总数等。

假设有一个函数 `fetchPostsFromAPI` 负责从后端 API 获取帖子数据：

```JavaScript
async function fetchPostsFromAPI() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];
}
```

你可以创建一个 `usePost` composable，其中封装了关于帖子的复用逻辑。

```JavaScript
import { ref, computed } from 'vue';

export default function usePost() {
  const posts = ref([]);
  const totalPosts = computed(() => posts.value.length);

  const fetchPosts = async () => {
    const data = await fetchPostsFromAPI();
    posts.value = data;
  };

  return [posts, fetchPosts, totalPosts];
}
```

**在这个** **`usePost`** **composable 中：**

- `posts` 是一个 `ref`，用于存储帖子数据。
- `fetchPosts` 是一个异步函数，用于从 API 获取帖子并更新 `posts`。
- `totalPosts` 是一个 `computed` 属性，用于计算 `posts` 数组的长度。

现在，这个 `usePost` composable 可以在多个组件中复用。例如，在一个组件中：

```JavaScript
import usePost from './usePost';

export default {
  setup() {
    const [posts, fetchPosts, totalPosts] = usePost();

    // Fetch posts when component is mounted
    fetchPosts();

    return {
      posts,
      totalPosts,
    };
  },
};
```

通过这样做，你不仅在不同组件之间复用了代码，还让单个组件更加关注于它自身的业务逻辑，而非与数据获取相关的细节。这样的结构使得代码更易于维护和测试，也方便了在团队中的协作。总体而言，使用 composable 函数是一种高效且结构化的方式来在 Vue 3 应用中实现代码复用。

## TypeScript Support

TypeScript 在 Vue 3 中得到了全面的支持，这意味着你可以利用**强类型（strong typing）**来编写更可靠、更易维护的代码。下面我将通过一些代码示例详细说明如何在不同方面使用 TypeScript。

### 为 Props 定义类型

你可以为组件的 props 定义接口，以确保正确的数据类型被传入。

```TypeScript
import { defineComponent } from 'vue';

interface MyComponentProps {
  prop1: string;
  prop2: number;
}

export default defineComponent({
  props: {
    prop1: {
      type: String,
      required: true,
    },
    prop2: {
      type: Number,
      required: true,
    },
  },
  setup(props: MyComponentProps) {
    // Now props are strongly typed
  },
});
```

### 为 Refs 定义类型

使用 `ref` 创建响应式引用时，你可以通过泛型来指定其数据类型。

```TypeScript
import { ref } from 'vue';

interface MyType {
  field1: string;
  field2: number;
}

const myRef = ref<MyType>({ field1: 'initial', field2: 0 });
```

这样，尝试将错误类型的值赋给 `myRef.value.field1` 或 `myRef.value.field2` 时，TypeScript 将会发出警告。

### 为 Reactive 对象定义类型

使用 `reactive` 创建响应式对象时，你同样可以利用 TypeScript 的泛型。

```TypeScript
import { reactive } from 'vue';

interface MyObjectType {
  key1: string;
  key2: number;
}

const myReactiveObject = reactive<MyObjectType>({ key1: 'initial', key2: 0 });
```

现在 `myReactiveObject` 是一个类型安全的响应式对象。尝试改变 `key1` 或 `key2` 的类型将会触发 TypeScript 的类型检查。

通过这种方式，TypeScript 提供了一层额外的安全网，确保你在开发过程中遵循最佳实践，并且能够在编译时捕获到潜在的错误，这在大型或团队项目中尤其有用。总体而言，Vue 3 和 TypeScript 结合使用可以大大提高代码质量和维护性。

图源：https://twitter.com/VueSchool_io/status/1715389408063447439
