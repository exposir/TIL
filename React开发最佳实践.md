
# React 开发最佳实践

非常基础非常初级非常幼稚的 React 开发看了想打人的 React 开发最佳实践，但我保证每个大公司都有这样的代码，所有的屎山项目都是这么累计起来的而且大家不以为意。

1. 多层 props 传递，保持命名一致`onChange` → `onChange` → `onChange` ✅`onChange` → `handleChange` → `change` ❌
2. 若对函数包装后传递，保持命名不一致`onChange` → `onTextChange = () => { onChange() }` → `onTextChange` ✅`onChange` → `onChange = () => { props.onChange() }` → `onChange` ❌
3. 保持命名简洁`onChange` ✅`handleChange` ❌
4. 保持命名明确`onChange` `paginationTotal` ✅`change` `pagiTotal` ❌
5. 传递不同组件的 props ，保持前缀区分`tableColumns` `tableLoading` `btnType` `btnText` ✅`columns` `loading` `type` `text` ❌
6. 将 props 按照一定的规则排序，例如 UI 中出现顺序、或变量类型、或重要程度等
7. 保持文件与目录的命名，单复数符合常规`common` `config` `components` `utils` ✅`commons` `configs` `component` `util` ❌
8. `''` 与 `0` 在 jsx 中一定要做判断`val !== '' && 123` `val !== 0 && 123` ✅`val && 123` ❌
9. 保持文件、文件夹大小写一致`ShopList` `ShopDetail` ✅`shop-list` `ShopDetail` ❌
10. 保持文件夹命名与 url 对应`/Shop/List.jsx` → `/shop` ✅`/BestShop/List.jsx` → `/shop` ❌
11. 保持文件夹层级与 url 一致`/Shop/A.jsx` → `/shop/a`、`/Shop/B.jsx` → `/shop/b` ✅`/Shop/A.jsx` → `/shop/a`、`/Shop/Center/B.jsx` → `/shop/b` ❌
12. 理清文件、文件夹设置逻辑，尽量减少数目，思考是否有必要新增
