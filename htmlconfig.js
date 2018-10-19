
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const pages = merge([
    {
        plugins: [
            new HtmlWebpackPlugin({ filename: 'index.html',template: 'src/index.pug'}),
            new HtmlWebpackPlugin({ filename: '1_1_basic_typography.html', template: 'src/1_1_basic_typography.pug'}),
            new HtmlWebpackPlugin({ filename: '1_2_text_alignment_display.html', template: 'src/1_2_text_alignment_display.pug'}),
            new HtmlWebpackPlugin({ filename: '1_3_floats_position.html', template: 'src/1_3_floats_position.pug'}),
            new HtmlWebpackPlugin({ filename: '1_4_colors_background.html', template: 'src/1_4_colors_background.pug'}),
            new HtmlWebpackPlugin({ filename: '1_5_spacing.html', template: 'src/1_5_spacing.pug'}),
            new HtmlWebpackPlugin({ filename: '1_6_sizing.html', template: 'src/1_6_sizing.pug'}),
            new HtmlWebpackPlugin({ filename: '1_7_breakpoints.html', template: 'src/1_7_breakpoints.pug'}),
            new HtmlWebpackPlugin({ filename: '2_1_buttons.html', template: 'src/2_1_buttons.pug'}),
            new HtmlWebpackPlugin({ filename: '2_2_navbar.html', template: 'src/2_2_navbar.pug'}),
            new HtmlWebpackPlugin({ filename: '2_3_list_groups_badges.html', template: 'src/2_3_list_groups_badges.pug'}),
            new HtmlWebpackPlugin({ filename: '2_4_forms.html', template: 'src/2_4_forms.pug'}),
            new HtmlWebpackPlugin({ filename: '2_5_input_groups.html', template: 'src/2_5_input_groups.pug'}),
            new HtmlWebpackPlugin({ filename: '2_6_alerts_progress.html', template: 'src/2_6_alerts_progress.pug'}),
            new HtmlWebpackPlugin({ filename: '2_7_tables_pagination.html', template: 'src/2_7_tables_pagination.pug'}),
            new HtmlWebpackPlugin({ filename: '2_8_cards.html', template: 'src/2_8_cards.pug'}),
            new HtmlWebpackPlugin({ filename: '2_9_media_object.html', template: 'src/2_9_media_object.pug'}),
            new HtmlWebpackPlugin({ filename: '2_10_jumbotron.html', template: 'src/2_10_jumbotron.pug'}),
            new HtmlWebpackPlugin({ filename: '3_1_grid_system.html', template: 'src/3_1_grid_system.pug'}),
            new HtmlWebpackPlugin({ filename: '3_2_grid_alignment.html', template: 'src/3_2_grid_alignment.pug'}),
            new HtmlWebpackPlugin({ filename: '3_3_flexbox.html',template: 'src/3_3_flexbox.pug'}),
            new HtmlWebpackPlugin({ filename: '3_4_auto_margins_wrapping_order.html',template: 'src/3_4_auto_margins_wrapping_order.pug'}),
            new HtmlWebpackPlugin({ filename: '4_1_carousel.html', template: 'src/4_1_carousel.pug'}),
            new HtmlWebpackPlugin({ filename: '4_2_collapse.html', template: 'src/4_2_collapse.pug'}),
            new HtmlWebpackPlugin({ filename: '4_3_tooltips.html', template: 'src/4_3_tooltips.pug'}),
            new HtmlWebpackPlugin({ filename: '4_4_popovers.html', template: 'src/4_4_popovers.pug'}),
            new HtmlWebpackPlugin({ filename: '4_5_modals.html', template: 'src/4_5_modals.pug'}),
            new HtmlWebpackPlugin({ filename: '4_6_scrollspy.html',template: 'src/4_6_scrollspy.pug'})
        ]
    }
]);

module.exports = pages;