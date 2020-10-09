import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
//import { DiscussionEmbed } from "disqus-react"

export default function Template({  data }) {  
	const post = data.markdownRemark;   

  console.log("postid", post.id)

  // const disqusConfig = {
  //   shortname: process.env.GATSBY_DISQUS_NAME,
  //   config: { identifier: post.id },
  // }

  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

	return (    
    <>
      <SEO title={`HaveCakeEatCake Blog - ${post.frontmatter.title}`} keywords={[`gatsby`, `application`, `react`]} />
  		<div className="blog-post-container">     
  		<Helmet title={`HaveCakeEatCake - ${post.frontmatter.title}`} />      
  		<div className="blog-post">        
  			<h3>{post.frontmatter.title}</h3> 
        <span className="published">published {post.frontmatter.date} by {post.frontmatter.author}</span>
      	<Img fluid={featuredImgFluid} />
  			<div        
  				className="blog-post-content"          
  				dangerouslySetInnerHTML={{ __html: post.html }}        
  			/>      
  			</div>    
  		</div>
      {/*<DiscussionEmbed {...disqusConfig} /> */}
    </>
	);
}

export const pageQuery = graphql`  
	query BlogPostByPath($path: String!) {    
		markdownRemark(frontmatter: { path: { eq: $path } }) {
      html  
      id    
      frontmatter {        
      	date(formatString: "MMMM DD, YYYY")        
      	path        
      	title      
        author 
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 960) {
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
        }                
      }
	  }  
	}
`;