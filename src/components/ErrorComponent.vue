<template>
  <div>
    <h1>Something went wrong 😢</h1>
    <p>{error.data || error.message}</p>

    <LinkButton to="-1">&larr; Go back</LinkButton>
  </div>
</template>
