function NotFound(){
    return(
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-primary-600 md:text-4xl text-primary-600 dark:text-primary-500">Something's missing.</p>
                <p class="mb-4 text-lg font-light ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <a href="/massive-bioinformatics-fe-assesment" class="inline-flex  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a>
            </div>   
        </div>
    )
}

export default NotFound;