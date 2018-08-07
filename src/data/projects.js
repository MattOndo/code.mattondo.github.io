/* Template

    {
        id: 1,
        name: 'Project Name',
        thumbnail: '/static/800x800.png',
        technologies: [
            { name: 'html' },
            { name: 'js' },
            { name: 'css' },
            { name: 'php' },
            { name: 'vue' },
            { name: 'wordpress' },
            { name: 'email' },
            { name: 'marketo' },
            { name: 'eloqua' },
            { name: 'pardot' },
            { name: 'hubspot' },
            { name: 'mailchimp' },
            { name: 'ion' },
        ]
    },

*/
const projects = [
    {
        name: 'Vue JS Webiste',
        pathname: 'vue-js-website',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'js' },
            { name: 'css' },
            { name: 'vue' },
        ]
    },
    {
        name: 'Marketo Email Template',
        pathname: 'marketo-email-template',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'css' },
            { name: 'email' },
            { name: 'marketo' },
        ]
    },
    {
        name: 'Wordpress Website',
        pathname: 'wordpress-website',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'js' },
            { name: 'css' },
            { name: 'php' },
            { name: 'wordpress' },
        ]
    },
    {
        name: 'Interactive Content',
        pathname: 'interactive-content',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'js' },
            { name: 'css' },
            { name: 'ion' },
        ]
    },
    {
        name: 'Eloqua Campaign',
        pathname: 'eloqua-campaign',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'js' },
            { name: 'css' },
            { name: 'eloqua' },
            { name: 'email' },
        ]
    },
    {
        name: 'Pardot Form Layout',
        pathname: 'pardot-form-layout',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'js' },
            { name: 'css' },
            { name: 'pardot' },
        ]
    },
    {
        name: 'Hubspot Template',
        pathname: 'hubspot-template',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'js' },
            { name: 'css' },
            { name: 'hubspot' },
        ]
    },
    {
        name: 'MailChimp Emails',
        pathname: 'mailchimp-emails',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'css' },
            { name: 'email' },
            { name: 'mailchimp' },
        ]
    },
    {
        name: 'Email Development',
        pathname: 'email-development',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'css' },
            { name: 'email' },
        ]
    },
    {
        name: 'Fancy Buttons',
        pathname: 'fancy-buttons',
        thumbnail: '/static/800x800.png',
        description: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
        technologies: [
            { name: 'html' },
            { name: 'css' },
        ]
    },
]
export default projects;