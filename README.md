# Group 2

What you will be working on today

Today you are going to continue to work on the product catalog, with two changes:

- Get the data directly from the FakeStore-API (https://fakestoreapi.com/)
- Use server-side rendering to improve the initial load time, in two different ways

Lab instructions

- You can start from scratch, change the application you built previously, or you can reuse the components for display you had before
- On getServerSideProps fetch the data from the FakeStore API and pass it into the component
- Also create a getStaticProps to generate the data on build time
- If you have time over, ponder and implement getStaticPaths and implement a separate /details/:id page

---

Lab instructions
Present a list of the quotes by getting the quotes from https://api.chucknorris.io/

The Chuck Norris API is meant to return random quotes, but by using https://api.chucknorris.io/jokes/search?query=hand you get a reasonable list
For each item in the list should have a # Charlie uttarances counter and a +-button to increment the counter

Store the value of this counter in a Firestore database, together with the id of quote. Let the id of the document in Firestore be the id from the Chuck-API:

{
"id": "dTTp5uNlS8yUdStNuf43Hg"
"charlieUttrance" : 12
}
This means that for each item in the list you will need to look up the Charlie-uttrances-value in the Firebase

If you have time over:

Add a comment-collection to each quote where the people can comment on the quote
Add a filtering to the list of quotes. Each quote as a category that can be used for this. Beware of the explicit-category if you want to show this to your parents...
