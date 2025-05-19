# Angular Posts List with Search and Pagination
Application screenshots : https://drive.google.com/drive/folders/1uDuKolx-d4zWXEWqA9hYNH35CeOpgFD0?usp=sharing 

This is a simple Angular standalone component project that displays a list of posts in a responsive grid layout with:

- Pagination: Loads 10 posts at a time with a **Load More** button.
- Search: Filters posts by title or body across all loaded posts.
- Responsive card layout (5 cards per row on desktop, 2 on tablet, 1 on mobile).
- Mock API service simulating backend data fetching with static data.
- Clicking a post card navigates to the post detail page (not included here).

---

## Features

- **Post List**  
  Displays posts in cards showing title and truncated body.  
  Responsive grid:  
  - Desktop: 5 cards per row  
  - Tablet: 2 cards per row  
  - Mobile: 1 card per row  
- **Search Bar**  
  Filters all loaded posts by matching text in title or body.  
- **Load More**  
  Loads posts incrementally (10 posts per click) until all posts are loaded.

---

## Technologies Used

- Angular Standalone Components  
- Angular Forms (for search input)  
- CSS Grid for responsive layout  
- Mock service with in-memory static data

---

## Setup & Usage

1. Clone the repository or copy the component files.

2. Make sure your Angular project includes `FormsModule` if using outside standalone components.

3. Use the `PostListComponent` in your Angular app.

4. The mock API service should simulate methods:  
   - `getPosts(page: number)` - returns 10 posts per page with a `next` boolean.  
   - `getPost(id: number)` and `getComments(postId: number)` for detail views.

5. Run the Angular app and navigate to the posts list route.

 
 
 
