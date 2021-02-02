/**
 * TinyMCE Plugin Sample (c) by Jim Etevenard
 *
 *  TinyMCE Plugin Sample is licensed under a
 *  Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 *  You should have received a copy of the license along with this
 *  work.  If not, see <http://creativecommons.org/licenses/by-sa/4.0/>.
 * 
 * 
 *  Declaration of a new plugin :
 *  =============================
 * 
 *  cf. https://www.tiny.cloud/docs-4x/api/tinymce/tinymce.plugin/
 *
 *  Usefull docs :
 *
 *  - https://www.tiny.cloud/docs-4x/api/tinymce/tinymce.editor/
 *  - https://www.tiny.cloud/docs-4x/api/tinymce.dom/tinymce.dom.domquery/    
 *  - https://www.tiny.cloud/docs-4x/api/tinymce.ui/tinymce.ui.button  
*/
tinymce.PluginManager.add('my_plugin_darkmode', function (editor) {

    // This variable sotres the enabling status.
    let isDark = false;

    // CSS injection.
    // Body becomes dark when .dark class is applied on the body
    // This CSS will be injected to the editor contents document at init (it's an iframe)
    let darkmodeCss = 'body.dark { background: #222; color: #FFD; }';
    editor.contentStyles.push(darkmodeCss);

    // Button definition.
    // The id "darkmode" allows adding it to the toolbar (See init at index.html)
    editor.addButton('darkmode', {
        icon: 'moon',
        tooltip: 'Dark mode',
        onclick: function () {
            // First, we invert the memorized enabling status (true = Dark mode enabled)
            isDark = !isDark;

            // 'this' here stands for the button
            // Toggles 'active' aspect of the button
            this.active(isDark)

            // Adds class .dark to the editor contents body (see CSS above)
            // TinyMCE embeds a JQuery-like library, called DOMUtils :
            // See https://www.tiny.cloud/docs-4x/api/tinymce.dom/tinymce.dom.domutils/
            editor.dom.toggleClass(editor.getBody(), 'dark', isDark);
        }
    });


});
