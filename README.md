# React Native Responsive Design, Scroll Views, and Flat Lists

## CatFinder

## Objectives

- Implement responsive CSS to ensure a satisfactory experience across devices.
- Use a Flat List to better handle a large amount of data.
- Use a Scroll View to create a responsive, scrollable interface.

## Why?

React Native is designed for building mobile apps across Android and iOS devices. Because these devices include tablets and phones, screen sizes can vary. As such, responsive design is important when building your app. React Native uses [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) by default, allowing content to reflow depending on the available screen space.

Unlike browsers, React Native elements do not scroll on their own when their content overflows their bounds. React Native's `ScrollView` component allows us to add scrolling interactions to our apps.

One downside to the `ScrollView` component is that it renders all child components at once, potentially impacting performance. When displaying a lot of data (several screens worth), it may be better to use the `FlatList` component, which lazily renders data just as it's about to appear on the screen. 

## Setup

This is a standard React Native project. If you haven't already, follow the [Expo Go Quickstart setup guide](https://reactnative.dev/docs/environment-setup) in the React Native docs. Run `npm install` and then run `npm start`.

This lab is intended to run on an iPad simulator. After running `npm start`, press `SHIFT + i` to select a simulator. Select an iPad version from the list.

## Framing

We're building an app that allows a user to find nearby cats to play with. A list of cat photos is displayed on the screen, along with their names and random distances to them. Clicking on a photo takes you to messages you've exchanged with the cat's owner.

When you first open the app, you'll notice several issues: First, the app fills only a fraction of the screen, since it was hard coded for a phone. Second, while data is visible on both screens, it is not scrollable. Several of these issues will persist throughout the lab until you arrive at the step that fixes them.

## Exercises

### A. Make the app responsive to the device's screen size

> Note: By design, the app in its starting state appears "broken". In sections A and B, we'll be making the app more responsive to better fill the iPad's screen. We'll also be implementing different ways of scrolling. If the app doesn't exactly fit the screen or if it doesn't scroll, don't worry--you're not doing anything wrong! We'll be fixing each of these issues throughout, so please keep following each step through to the end.

1. Uh-oh! It looks like this app was made for a smaller screen! In `App.js`, find and remove the hardcoded height and width. While React Native uses unitless values, hardcoding a height and width prevents the app from adjusting its content to fill the screen. You'll notice that the app disappears, but we'll take care of that in the next step.

2. React Native uses [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) to manage responsiveness; this is enabled by default. One of the most useful CSS properties to remember when working on a React Native project is [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex), which tells an element how to grow or shrink to fill available space. We can use the `flex` property to have the app fill the space responsively. In `App.js`, give both the `container` and `navigationContainer` a `flex` property of `1` in the `styles` object.

<details>
<summary>Click here for the coded answer</summary>

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    flex: 1,
  }
})
```
</details>
<br>

3. Hardcoded dimensions should be used judiciously, usually in cases where a specific fixed width or height is desired. In this case, we want the title to take up a certain amount of space. Add a height property to the `TitleBar` component so that it takes up more space and is more easily visible.

4. You might notice that the title overlaps the statuses at the top of the screen. While adding padding or margin could work, React Native includes a component that accounts for this space. In `App.js`, import `SafeAreaView` from React Native and wrap the entire app in the `SafeAreaView`. Give it a style of `flex: 1`. Note how the space is now accounted for. [Check out the docs for more info.](https://reactnative.dev/docs/safeareaview)

<details>
<summary>Click here for the coded answer</summary>

```javascript
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
        { /* ... */ }
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  }
})
```
</details>
<br>

### B. Implement a Flat List

1. The `FlatList` component is useful for rendering large amounts of data in a performant manner. It has benefits and drawbacks that are important to note. First, the `FlatList` renders data lazily, meaning it won't try to render data before it's needed. One of the main drawbacks, though, is responsiveness, particularly with grids. In our `CatScreen` page, we want to flow the photos of the cats into a grid shape and have this grid fill the available space. In a typical React application, we'd use `flex-wrap: wrap` to have the content flow as needed. Unfortunately, with a `FlatList`, the `flex-wrap` property is not supported and React Native will warn you about this.

> [Check out the React Native docs for more info on flat lists!](https://reactnative.dev/docs/flatlist)

2. The `FlatList` component does include a `numColumns` prop which allows you to specify the number of columns for the content. The `FlatList` component will flow its content into these columns. But this presents one significant drawback. What do you think this might be? Think about it and then click below for the answer.

<details>
<summary>Click here for the answer</summary>

Much like using hardcoded heights and widths, using a hardcoded `numColumns` prop won't work across different screen sizes. Fortunately, we can work around this! Read on to find out.
</details>
<br>

3. In the `CatScreen` component, import the `FlatList` component from React Native. The `FlatList` component does not take children. Instead, it takes a `data` prop, which is an array of data it will use for each element, as well as a `renderItem` prop to render the scrollable content. The `FlatList` will iterate over each item in the `data` array and call the `renderItem` function for it. The `renderItem` function will receive an object with the key of `item`. This `item` will have the data to display. The `renderItem` function should use this `item` and return a component to display. [See the React Native docs for more info.](https://reactnative.dev/docs/flatlist)

4. In the `CatScreen`, write a `renderItem` function that returns the `PhotoCard` component. You can use this `item` argument given by the `FlatList` to populate the `PhotoCard` props.

<details>
<summary>Click here for the coded answer</summary>

```javascript
const renderItem = ({ item }) => {
    return (
        <PhotoCard name={item.name} photo={item.photo} distance={`${item.distance} miles`} />
    );
};
```
</details>
<br>

5. In `CatScreen`, replace the current `View` and map function with the `FlatList`. Pass in the `catData` object and the `renderItem` function you just created. The elements will still appear as a single column, but that's okay! We'll take care of that shortly.

<details>
<summary>Click here for the coded answer</summary>

```javascript
return (
    <FlatList
        data={catData}
        renderItem={renderItem}
    />
)
```
</details>
<br>

6. Serialized elements in React require a `key` prop. The `FlatList` component can extract a key and pass it down automatically with its `keyExtractor` prop. This prop takes a function that receives the current item as its first argument and the index as its second. It returns a unique string to use as a key. Write a function for the `keyExtractor` prop that takes `data` and `index` arguments and returns a unique key. Add it to the `FlatList`. (HINT: Use a combination of the cat's name and an index for the key!)

<details>
<summary>Click here for the coded answer</summary>

```javascript
keyExtractor={(data, index) => `${data.name}-${index}`}
```
</details>
<br>

7. You should be seeing the list of cats rendered as a single column on the page. This is great, but it's not an ideal user experience, especially with so much empty space on the screen. We can use the `numColumns` prop to reflow the content into columns. Try adding a `numColumns` prop of `3` to the `FlatList`. As discussed earlier, this presents issues with responsiveness, since hardcoding the value means we'll have three columns no matter the size of the screen. How might we solve for this? Think about it for a few seconds and then check out the answer below.

<details>
<summary>Click here for the answer</summary>

If we divide the width of the space by the width of each `PhotoCard` element and round down, we'll get the number of columns.

</details>
<br>

8. First, we'll need to know the width of each item we want to display. In this case, each `PhotoCard` is hardcoded to be `200` pixels wide. Next, we'll need the width of the space to fill. We have a few options, like `useRef`, but let's go with something more React Native-y. React Native includes a [useWindowDimensions hook](https://reactnative.dev/docs/usewindowdimensions) that returns an object with the height and width of the screen size. This is handy for responsiveness! In the `CatScreen`, divide the `width` returned by `useWindowDimensions` by `200` and round down using `Math.floor`. Provide that value to the `numColumns` prop. The cats should fill the screen!

> Note: You might get an error about changing the `numColumns` on the fly. If you do, reload the app by clicking `Device` -> `Shake` -> `Reload`. You can also comment the `keyExtractor`, save, and then uncomment it.

<details>
<summary>Click here for the coded answer</summary>

```javascript
const CatScreen = () => {
    const { width } = useWindowDimensions();

    const renderItem = ({ item }) => {
        return (
            <PhotoCard name={item.name} photo={item.photo} distance={`${item.distance} miles`} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={catData}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                numColumns={Math.floor(width / 200)}
            />
        </View>
    );
};
```
</details>
<br>

### C. Implement a Scroll View

1. We can't simply add `overflow` to an element as we might on a web app to enable scrolling. Instead, we use React Native's `ScrollView` component to enable scrollable screens in an app. `ScrollView` components have a bit more versatility than the `FlatList` component, but they also come with a performance cost. You can use the `FlatList` or `ScrollView` as needed. For now, let's add a `ScrollView` to the `MessagesScreen`. [Check out the docs if needed.](https://reactnative.dev/docs/scrollview)

2. In the `MessagesScreen`, import the `ScrollView` from React Native and wrap it around the `View`.

<details>
<summary>Click here for the coded answer</summary>

```js
const MessageScreen = () => {
return (
        <ScrollView>
            <View style={styles.container}>
                {messageData.map((message, idx) => {
                    return (
                        <Message message={message} key={`${message.text}-${idx}`} />
                    );
                })}
            </View>
        </ScrollView>
    );
};
```
</details>
<br>

3. Note that you're now able to scroll the messages in the simulator!

### D. Extra Challenges

**Mild**
- The `FlatList` component can be customized with a wide variety of props, like column styles, headers, and footers. [Check out the docs](https://reactnative.dev/docs/flatlist#props) and try customizing your `FlatList` implementation.

**Medium**
- Updating the `FlatList` component's data prop causes the component to rerender. Can you add a filter button above the cat photos that filters the array by distance? You can use React Native's [Button](https://reactnative.dev/docs/button), [TouchableOpacity](https://reactnative.dev/docs/touchableopacity), or [Pressable](https://reactnative.dev/docs/pressable) components. The `Pressable` component is the most recent touchable component. This might be a great chance to experiment with the subtle differences between each!

**Spicy**
- The `ScrollView` component can be paginated! Implement a `ScrollView` instead of a `FlatList` in the `CatScreen`. Refer to the [React Native docs](https://reactnative.dev/docs/scrollview) to turn the `ScrollView` into a paginated component that shows one cat at a time. Note that the `PhotoCard` component will need to take up the full screen for this to work. You can use the [React Native useWindowDimensions hook](https://reactnative.dev/docs/usewindowdimensions) to get the height and width of the screen or a ref.
