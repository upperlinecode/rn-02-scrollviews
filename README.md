# React Native Responsive Design, Scroll Views, and Flat Lists

## CatFinder

## Objectives

- Implement responsive CSS to ensure a satisfactory experience across devices.
- Use a Scroll View to create a responsive, scrollable interface.
- Use a Flat List to better handle a large amount of data.

## Why?

React Native is designed for building mobile apps across Android and iOS devices. Because these devices include tablets and phones, screen sizes can vary. As such, responsive design is important when building your app. React Native uses [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) by default, allowing content to reflow depending on the available nspace.

Unlike browsers, React Native elements do not scroll on their own when their content overflows their bounds. React Native's Scroll View component allows us to add scrolling interactions to our apps.

One downside to the Scroll View component is that it renders all child components at once, potentially impacting performance. When displaying a lot of data (several screens worth), it may be better to use the Flat List component, which lazily renders data just as its about to appear on the screen. 

## Setup

This is a standard React Native project. If you haven't already, follow the [Expo Go Quickstart setup guide](https://reactnative.dev/docs/environment-setup) in the React Native docs. Run `npm install` and then run `npm start`.

This lab is intended to run on an iPad simulator. After running `npm start`, press `SHIFT + i` to select a simulator. Select an iPad version from the list.

## Framing

We're building an app that allows a user to find nearby cats to play with. A list of cat photos is displayed on the screen, along with their names and random distances to them. The tabs at the bottom of the screen allow you to switch between screens for Scroll Views and Flat Lists.

When you first open the app, you'll notice several issues: First, the app fills only a fraction of the screen, since it was hard coded for a phone. Second, while data is visible on both screens, it is not scrollable.

## Exercises

### A. Make the app responsive to the device's screen size*

1. In `App.tsx`, find and remove the hardcoded height and width. While React Native uses unitless values, hardcoding a height and width prevents the app from adjusting its content to fill the screen. Hardcoded dimensions should be used judiciously.

2. React Native uses flexbox to manage responsiveness. Use the `flex` property instead of a hardcoded width to allow this section to fill the screen as needed. [See the MDN docs if needed.](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

### B. Implement a Scroll View

1. Import the `ScrollView` component from React Native in `./src/screens/ScrollViewsScreen`. Wrap the `View` component with the `ScrollView`. [Check out the docs if needed.](https://reactnative.dev/docs/scrollview)

    <details>
    <summary>Click here for the coded answer</summary>

    ```js
    const ScrollViewsScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {catData.map((data, index) => {
                    return (
                    <PhotoCard key={`${data.name}-${index}`} name={data.name} photo={data.photo} distance={`${data.distance} miles`} />
                    )
                })}
            </View>
        </ScrollView>
    )
    };
    ```
    </details>
    <br>

2. Note that you're now able to scroll this content in the simulator!

3. However, the content is still shown only in a single column, when it should ideally fill the screen. By default, the `flexDirection` in React Native is set to `column`. What happens if you explicitly set it to `row` in the styles for the `View` component in `ScrollViewsScreen`? Can you get the content to wrap so that it fills the screen? [See the flexbox MDN docs for more info.](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)

    <details>
    <summary>Click here for the coded answer</summary>

    ```javascript
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#34495e',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }
    });
    ```
    </details>
    <br>

4. (Optional) Use flexbox to center the wrapped content in the screen.

### B. Implement a Flat List

1. Find the `FlatListScreen` component.

2. The `FlatList` component is useful for rendering large amounts of data in a performant manner. Import the `FlatList` component from React Native. Unlike the `ScrollView` component, the `FlatList` component does not take children. Instead, it takes a `data` prop as well as a `renderItem` prop to render the scrollable content. First, write a `renderItem` function that returns the `TableRow` component. This function will accept a `data` argument of the type `ListRenderItemInfo<CatData>`. You can use this `data` argument to populate the `TableRow` props. Don't worry if you're not familiar with TypeScript types. Adding the type to the argument will make it easier for you to determine the structure of the object being passed in: `(data: ListRenderItemInfo<CatData) => <TableRow ... />`.

    <details>
    <summary>Click here for the coded answer</summary>

    ```javascript
    const renderItem = (data: ListRenderItemInfo<CatData>) => {
        return <TableRow
            name={data.item.name}
            photo={data.item.photo}
            distance={`${data.item.distance} miles`}
        />;
    }
    ```
    </details>
    <br>

3. Replace the current `View` and `TableRow` with the `FlatList`. Pass in the `catData` object and the `renderItem` function you just created. [See the React Native docs for more info.](https://reactnative.dev/docs/flatlist)

4. Serialized elements in React require a `key` prop. Write a function for the `keyExtractor` prop for the `FlatList` component that takes `data` and `index` arguments and returns a unique key. (HINT: Use a combination of the cat's name and an index for the key!)

### C. Extra Challenges

**Mild**
- Use the `TableSeparator` component to separate the elements in the `FlatList` component.

**Spicy**
- The `ScrollView` component can be paginated! Refer to the [React Native docs](https://reactnative.dev/docs/scrollview) to turn the `ScrollView` into a paginated component that shows one cat at a time. Note that the `PhotoCard` component will need to take up the full screen for this to work. You can use the [React Native Dimensions API](https://reactnative.dev/docs/dimensions) to get the height and width of the screen.