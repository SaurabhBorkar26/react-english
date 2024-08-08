import React from 'react'

function card({username='hc' ,post='not assigned'}) {
    //console.log(props)
  return (
    <div>
<figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img 
    class="w-24 h-24 rounded-full mx-auto" 
    src="https://media.istockphoto.com/id/485881893/photo/yog-guru-baba-ramdev.jpg?s=612x612&w=0&k=20&c=n4S1Zub5oKv4vDGVvHAbhTE6jI443uL73VBGwPVjT-M=" 
    alt="" 
    width="384" 
    height="512"
  />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-500">
       {username}
      </div>
      <div>
      {post}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default card