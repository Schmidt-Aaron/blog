# misc todo list for this site

- finish up prism theme + responsivity
- figure out single line highlighting
- SEO
  -titles and meta descriptions
  - self-canonical
- gatsby-plugin-netlify
- gatsby-plugin-netlify cache
- add react-live?
- sticky header + animation(spring?)
- refactor styles -- use Global emotion
- add tests?
- style scroll bars
- refactor home layout out
- add seo schemas - person for normal pages, article schema for posts, and
- schema generator https://technicalseo.com/tools/schema-markup-generator/

sample person schema

<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Aaron Schmidt",
  "url": "https://aaronms.com",
  "image": "",
  "sameAs": [
    "https://twitter.com/Aaronmss",
    "https://www.linkedin.com/in/aaronmss/",
    "https://github.com/Schmidt-Aaron",
    "https://aaronms.com"
  ],
  "jobTitle": "javascript developer",
  "worksFor": {
    "@type": "Organization",
    "name": "self"
  }  
}
</script>

sample article schema

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://aaronms/blogpost"
  },
  "headline": "sample headline",
  "description": "short description of the article",
  "image": "image url",  
  "author": {
    "@type": "Person",
    "name": "Aaron Schmidt"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "https://aaronms.com",
    "logo": {
      "@type": "ImageObject",
      "url": "publisher logo url",
      "width": 300,
      "height": 60
    }
  },
  "datePublished": "2020-03-02",
  "dateModified": "2020-03-03"
}
</script>

const solution = (array) => {
function merge(left, right) {
let merged = [];
let i = 0;
let j = 0;

      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          merged.push(left[i]);
            i++;
        } else {
          merged.push(right[j]);
            j++;
        }
      }

      return merged.concat(left.slice(i)).concat(right.slice(j));
    }

    function mergeSort(array) {
      if (array.length <= 1) {
        return array;
      }

      let middleIndex = Math.floor(array.length / 2);

      let left = array.slice(0, middleIndex);
      let right = array.slice(middleIndex, array.length);

      return merge(mergeSort(left), mergeSort(right));
    }

    return mergeSort(array)

};
