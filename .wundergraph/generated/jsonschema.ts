import { JSONSchema7 } from "json-schema";

interface Schema {
	AddMessage: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	AllUsers: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	ChangeUserName: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	DeleteAllMessagesByUserEmail: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	Messages: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	MockQuery: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	SetLastLogin: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	UserInfo: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
}

const jsonSchema: Schema = {
	AddMessage: {
		input: {
			type: "object",
			properties: { message: { type: "string" } },
			additionalProperties: false,
			required: ["message"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						createOnemessages: {
							type: "object",
							properties: { id: { type: "integer" }, message: { type: "string" } },
							additionalProperties: false,
							required: ["id", "message"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	AllUsers: {
		input: {
			type: "object",
			properties: { email: { type: "string" } },
			additionalProperties: false,
			required: ["email"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						findManyusers: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "integer" },
									email: { type: "string" },
									name: { type: "string" },
									messages: {
										type: "array",
										items: {
											type: "object",
											properties: { id: { type: "integer" }, message: { type: "string" } },
											additionalProperties: false,
											required: ["id", "message"],
										},
									},
								},
								additionalProperties: false,
								required: ["id", "email", "name"],
							},
						},
					},
					additionalProperties: false,
					required: ["findManyusers"],
				},
			},
			additionalProperties: false,
		},
	},
	ChangeUserName: {
		input: {
			type: "object",
			properties: { newName: { type: "string" } },
			additionalProperties: false,
			required: ["newName"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						updateOneusers: {
							type: "object",
							properties: {
								id: { type: "integer" },
								email: { type: "string" },
								name: { type: "string" },
								updatedat: { type: "string" },
							},
							additionalProperties: false,
							required: ["id", "email", "name", "updatedat"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	DeleteAllMessagesByUserEmail: {
		input: {
			type: "object",
			properties: { email: { type: "string" } },
			additionalProperties: false,
			required: ["email"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						deleteManymessages: {
							type: "object",
							properties: { count: { type: "integer" } },
							additionalProperties: false,
							required: ["count"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	Messages: {
		input: { type: "object", properties: {}, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						findManymessages: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "integer" },
									message: { type: "string" },
									users: {
										type: "object",
										properties: { id: { type: "integer" }, name: { type: "string" } },
										additionalProperties: false,
										required: ["id", "name"],
									},
								},
								additionalProperties: false,
								required: ["id", "message", "users"],
							},
						},
					},
					additionalProperties: false,
					required: ["findManymessages"],
				},
			},
			additionalProperties: false,
		},
	},
	MockQuery: {
		input: { type: "object", properties: {}, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						findFirstusers: {
							type: "object",
							properties: { id: { type: "integer" }, email: { type: "string" }, name: { type: "string" } },
							additionalProperties: false,
							required: ["id", "email", "name"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	SetLastLogin: {
		input: {
			type: "object",
			properties: { email: { type: "string" } },
			additionalProperties: false,
			required: ["email"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						updateOneusers: {
							type: "object",
							properties: { id: { type: "integer" }, lastlogin: { type: "string" } },
							additionalProperties: false,
							required: ["id", "lastlogin"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	UserInfo: {
		input: { type: "object", properties: {}, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						findFirstusers: {
							type: "object",
							properties: {
								id: { type: "integer" },
								email: { type: "string" },
								name: { type: "string" },
								lastlogin: { type: "string" },
							},
							additionalProperties: false,
							required: ["id", "email", "name", "lastlogin"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
};
export default jsonSchema;
