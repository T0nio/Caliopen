// Copyleft (ɔ) 2017 The Caliopen contributors.
// Use of this source code is governed by a GNU AFFERO GENERAL PUBLIC
// license (AGPL) that can be found in the LICENSE file.

package objects

type (
	//object stored in db
	LocalIdentity struct {
		Display_name string `cql:"display_name"            json:"display_name"`
		Identifier   string `cql:"identifier"              json:"identifier"`
		Status       string `cql:"status"                  json:"status"`
		Type         string `cql:"type"                    json:"type"`
		User_id      UUID   `cql:"user_id"                 json:"user_id"           formatter:"rfc4122"`
	}

	// embedded in a contact
	SocialIdentity struct {
		Infos    map[string]string `cql:"infos"     json:"infos"`
		Name     string            `cql:"name"      json:"name"`
		SocialId UUID              `cql:"social_id" json:"social_id"`
		Type     string            `cql:"type"      json:"type"`
	}

	//reference embedded in a message
	Identity struct {
		Identifier string `cql:"identifier"     json:"identifier"`
		Type       string `cql:"type"           json:"type"`
	}

	// Mean of communication for a contact, with on-demand calculated PI.
	ContactIdentity struct {
		Identifier   string       `json:"identifier"` // the 'I' like in URI, ie : the email address for email ; the user's real name for IRC
		Label        string       `json:"label"`      // the 'display-name' field in email address if available ; the 'nickname' for IRC
		PrivacyIndex PrivacyIndex `json:"privacy_index"`
		Protocol     string       `json:"protocol"` // email, irc, sms, etc.
	}

	//struct returned to user by suggest engine when performing a string query search
	RecipientSuggestion struct {
		Address    string `json:"address,omitempty"`    // could be empty if suggestion is a contact (or should we automatically put preferred identity's address ?)
		Contact_Id string `json:"contact_id,omitempty"` // contact's ID if any
		Label      string `json:"label,omitempty"`      // name of contact or <display-name> in case of an address returned from participants lookup, if any
		Protocol   string `json:"protocol,omitempty"`   // email, IRC…
		Source     string `json:"source,omitempty"`     // "participant" or "contact", ie from where this suggestion came from
	}

        RemoteIdentity struct {
		Display_name string `cql:"display_name"            json:"display_name"`
		Identifier   string `cql:"identifier"              json:"identifier"`
		Type         string `cql:"type"                    json:"type"`
		Status       string `cql:"status"                  json:"status"`
		Infos        Info   `cql:"infos"                   json:"infos"`
		User_id      UUID   `cql:"user_id"                 json:"user_id"           formatter:"rfc4122"`
        }

        Info struct {
                Server   string `cql:"server"            json:"server"`
                Port     string `cql:"port"              json:"port"`
                Password string `cql:"password"          json:"password"`
        }
)
