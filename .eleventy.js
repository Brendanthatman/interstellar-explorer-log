
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("spaceLink", function(caption, link){
    return `  
      <div class="footer">
        <p>Enjoy a Random (Real!) Space Picture from NASA:</p>
        <p><em><a href="${link}">${caption}</a></em></p>
      </div>
    `;
  });
};