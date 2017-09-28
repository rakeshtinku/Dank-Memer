exports.run = async function (Memer, msg) {
	if (!Memer.client.voiceConnections.get(msg.channel.guild.id)) {
		return msg.channel.createMessage('I\'m not even playing anything in this server <:waitwhat:320387072290455554>')
	}
	if (!msg.member.voiceState.channelID) {
		return msg.channel.createMessage('You\'re not even in a voice channel <:waitwhat:320387072290455554>')
	}
	if (msg.member.voiceState.channelID !== Memer.client.voiceConnections.get(msg.channel.guild.id).channelID) {
		return msg.channel.createMessage('You\'re not even in my voice channel <:waitwhat:320387072290455554>')
	}
	await Memer.client.voiceConnections.get(msg.channel.guild.id).stopPlaying()
	if (Memer.client.voiceConnections.get(msg.channel.guild.id)) {
		await Memer.client.voiceConnections.get(msg.channel.guild.id).disconnect()
		await Memer.client.voiceConnections.get(msg.channel.guild.id)._destroy()
		await Memer.client.voiceConnections.remove(Memer.client.voiceConnections.get(msg.guild.id))
	}
	msg.addReaction('❌')
}

exports.props = {
	name: 'stop',
	usage: '{command}',
	aliases: ['end'],
	cooldown: 1000,
	description: 'STOP FARTING'
}